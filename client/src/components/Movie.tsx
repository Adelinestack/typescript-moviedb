import React, { PureComponent } from 'react';
import Cast from './Cast';
import { RouteComponentProps } from 'react-router-dom';
import { getMovieById } from '../services/moviesApi';
import { IMovie } from '../../../types/movieTypes';
import { API_IMG } from '../utils/APIConst';
import {
  MovieContent,
  MovieImg,
  MovieDetails,
  Info,
} from '../stylized/movieStyle';

interface IMovieProps extends RouteComponentProps<{ movieId: string }> {}

interface IMovieState {
  movieDatas: IMovie;
}

export default class Movie extends PureComponent<IMovieProps, IMovieState> {
  constructor(props: IMovieProps) {
    super(props);
    this.state = {
      movieDatas: {},
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const {
      match: {
        params: { movieId },
      },
    } = this.props;
    this.fetchMovieById(movieId);
  }

  async fetchMovieById(movieId: string) {
    const movieDatas = await getMovieById(movieId);
    this.setState({
      movieDatas,
    });
  }

  render() {
    const { movieId } = this.props.match.params;
    const {
      posterPath,
      title,
      releaseDate,
      voteAverage,
      voteCount,
      genres,
      overview,
    } = this.state.movieDatas;
    const genresList = genres && genres.map(({ name }) => <span>{name} </span>);
    return (
      <div>
        <MovieContent key={movieId}>
          <MovieImg>
            <img src={`${API_IMG}${posterPath}`} alt={title} />
          </MovieImg>
          <MovieDetails>
            <h2>{title}</h2>
            <div>
              <p>
                <Info>Release: </Info>
                {releaseDate}
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
        <Cast mediaId={movieId} mediaType="movie" />
      </div>
    );
  }
}
