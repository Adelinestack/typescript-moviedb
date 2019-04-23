import express from 'express';
import { getMovieById } from '../services/movieApi';
import { IMovie } from '../../types/movieTypes';
const movieRouter = express.Router();

movieRouter.get('/:movieId', async (req, res) => {
  const movieId = req.params.movieId;
  const movie: IMovie = await getMovieById(movieId);
  res.json(movie);
});

export { movieRouter };
