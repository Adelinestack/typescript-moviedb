import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { getCastByMovieId, getCastByTvId } from '../services/moviesApi';
import { ICast } from '../../../types/castTypes';
import { CastContainer, CastBlock, CastPhoto } from '../stylized/castStyle';
import { API_IMG } from '../utils/APIConst';

interface ICastProps {
  mediaId: string;
  mediaType: string;
}
interface ICastState {
  castDatas: ICast[];
}

export default class Cast extends PureComponent<ICastProps, ICastState> {
  constructor(props: ICastProps) {
    super(props);
    this.state = {
      castDatas: [],
    };
  }

  componentDidMount() {
    const { mediaId, mediaType } = this.props;
    this.fetchCastByMediaId(mediaId, mediaType);
  }

  async fetchCastByMediaId(mediaId: string, mediaType: string) {
    const castDatas =
      mediaType === 'movie'
        ? await getCastByMovieId(mediaId)
        : await getCastByTvId(mediaId);
    this.setState({
      castDatas,
    });
  }

  render() {
    const { castDatas } = this.state;

    const cast = castDatas.map(({ profilePath, id, name }) => {
      if (profilePath) {
        return (
          <CastBlock key={id}>
            <Link to={`/person/${id}`}>
              <CastPhoto src={`${API_IMG}${profilePath}`} alt={name} />
              <p>{name}</p>
            </Link>
          </CastBlock>
        );
      }
      return '';
    });

    return (
      <section>
        <h3>Cast</h3>
        <CastContainer>{cast}</CastContainer>
      </section>
    );
  }
}
