import express from 'express';
import { getTvById } from '../services/tvApi';
import { ITv } from '../../types/tvTypes';
const tvRouter = express.Router();

tvRouter.get('/:tvId', async (req, res) => {
  const tvId = req.params.tvId;
  const tv: ITv = await getTvById(tvId);
  res.json(tv);
});

export { tvRouter };
