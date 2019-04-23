import express from 'express';
import { getPeopleById } from '../services/peopleApi';
import { IPeople } from '../../types/peopleTypes';
const peopleRouter = express.Router();

peopleRouter.get('/:peopleId', async (req, res) => {
  const peopleId = req.params.peopleId;
  const people: IPeople = await getPeopleById(peopleId);
  res.json(people);
});

export { peopleRouter };
