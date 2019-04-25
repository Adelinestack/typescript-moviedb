import React, { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getPeopleById } from '../services/moviesApi';
import { IPeople } from '../../../types/peopleTypes';
import { API_IMG } from '../utils/APIConst';
import {
  MovieContent,
  MovieImg,
  MovieDetails,
  Info,
} from '../stylized/movieStyle';

interface IPeopleProps extends RouteComponentProps<{ peopleId: string }> {}
interface IPeopleState {
  peopleDatas: IPeople;
}

export default class People extends PureComponent<IPeopleProps, IPeopleState> {
  constructor(props: IPeopleProps) {
    super(props);
    this.state = {
      peopleDatas: {},
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const {
      match: {
        params: { peopleId },
      },
    } = this.props;
    this.fetchPeopleById(peopleId);
  }

  async fetchPeopleById(peopleId: string) {
    const peopleDatas = await getPeopleById(peopleId);
    this.setState({
      peopleDatas,
    });
  }

  render() {
    const {
      birthday,
      deathday,
      name,
      biography,
      placeOfBirth,
      profilePath,
    } = this.state.peopleDatas;

    return (
      <div>
        <MovieContent>
          <MovieImg>
            <img src={`${API_IMG}${profilePath}`} alt={name} />
          </MovieImg>
          <MovieDetails>
            <h2>{name}</h2>
            <div>
              <p>
                <Info>Birth date: </Info>
                {birthday}
              </p>
              <p>
                <Info>Place of birth: </Info>
                {placeOfBirth}
              </p>
              <p>
                <Info>Death date: </Info>
                {deathday || '-'}
              </p>
            </div>
            <div>
              <Info>Biography: </Info>
              <p>{biography || '-'}</p>
            </div>
          </MovieDetails>
        </MovieContent>
      </div>
    );
  }
}
