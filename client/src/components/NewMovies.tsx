import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from '../../../types/movieTypes';
import { API_IMG } from '../utils/APIConst';
import {
  NewMovieContainer,
  MovieBlock,
  MovieImg,
  MovieDatas,
} from '../stylized/newMoviesStyle';

interface INewMoviesProps {
  upcomingMovies: IMovie[];
}
const NewMovies: React.FC<INewMoviesProps> = ({ upcomingMovies }) => {
  const upcomingMoviesList = upcomingMovies.map(
    ({ id, posterPath, title, releaseDate }) => (
      <MovieBlock key={id}>
        <Link to={`/movie/${id}`}>
          <MovieImg src={`${API_IMG}${posterPath}`} alt={title} />
          <MovieDatas>
            <h3>{title}</h3>
            <p>{releaseDate}</p>
          </MovieDatas>
        </Link>
      </MovieBlock>
    )
  );
  return (
    <section>
      <h2>New Releases</h2>
      <NewMovieContainer>{upcomingMoviesList}</NewMovieContainer>
    </section>
  );
};

export default memo(NewMovies);
