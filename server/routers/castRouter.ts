import express from 'express';
import { getCastByMovieId, getCastByTvId } from '../services/castApi';
import { ICast } from '../../types/castTypes';
const castRouter = express.Router();

castRouter.get('/movie/:movieId', async (req, res) => {
  const movieId = req.params.movieId;
  const cast: ICast[] = await getCastByMovieId(movieId);
  res.json(cast);
});

castRouter.get('/tv/:tvId', async (req, res) => {
  const tvId = req.params.tvId;
  const cast: ICast[] = await getCastByTvId(tvId);
  res.json(cast);
});

export { castRouter };
