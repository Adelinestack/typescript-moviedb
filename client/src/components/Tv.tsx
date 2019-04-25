import React, { PureComponent } from 'react';
import Cast from './Cast';
import { RouteComponentProps } from 'react-router-dom';
import { getTvById } from '../services/moviesApi';
import { ITv } from '../../../types/tvTypes';
import { API_IMG } from '../utils/APIConst';
import {
  MovieContent,
  MovieImg,
  MovieDetails,
  Info,
} from '../stylized/movieStyle';

interface ITvProps extends RouteComponentProps<{ tvId: string }> {}

interface ITvState {
  tvDatas: ITv;
}

export default class Tv extends PureComponent<ITvProps, ITvState> {
  constructor(props: ITvProps) {
    super(props);
    this.state = {
      tvDatas: {},
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const {
      match: {
        params: { tvId },
      },
    } = this.props;
    this.fetchTvById(tvId);
  }

  async fetchTvById(tvId: string) {
    const tvDatas = await getTvById(tvId);
    this.setState({
      tvDatas,
    });
  }

  render() {
    const { tvId } = this.props.match.params;
    const {
      name,
      overview,
      genres,
      status,
      voteCount,
      voteAverage,
      posterPath,
      firstAirDate,
      lastAirDate,
      originCountry,
      numberOfEpisodes,
      numberOfSeasons,
    } = this.state.tvDatas;
    const genresList = genres && genres.map(({ name }) => <span>{name} </span>);
    return (
      <div>
        <MovieContent key={tvId}>
          <MovieImg>
            <img src={`${API_IMG}${posterPath}`} alt={name} />
          </MovieImg>
          <MovieDetails>
            <h2>{name}</h2>
            <div>
              <p>
                <Info>First air date: </Info>
                {firstAirDate}
              </p>
              <p>
                <Info>Last air date: </Info>
                {lastAirDate}
              </p>
              <p>
                {numberOfEpisodes} episodes - {numberOfSeasons} seasons
              </p>
              <p>
                <Info>Status: </Info>
                {status}
              </p>
              <p>
                <Info>Origin country: </Info>
                {originCountry}
              </p>
              <p>
                <Info>Rating: </Info>
                {voteAverage}
              </p>
              <p>
                <Info>Vote: </Info>
                {voteCount}
              </p>
              <p>
                <Info>Genre: </Info>
                {genresList}
              </p>
            </div>
            <p>{overview}</p>
          </MovieDetails>
        </MovieContent>
        <Cast mediaId={tvId} mediaType="tv" />
      </div>
    );
  }
}
