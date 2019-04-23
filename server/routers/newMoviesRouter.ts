import express from 'express';
import { getNewMovies } from '../services/newMoviesApi';
import { IMovie } from '../../types/movieTypes';
const newMoviesRouter = express.Router();

newMoviesRouter.get('/', async (req, res) => {
  const newMovies: IMovie[] = await getNewMovies();
  res.json(newMovies);
});

export { newMoviesRouter };
