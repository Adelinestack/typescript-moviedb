import express from 'express';
import { getSearchResults } from '../services/movieApi';
import { ISearch, formattedSearch } from '../../types/searchTypes';
const searchRouter = express.Router();

searchRouter.get('/:keywords', async (req, res) => {
  const keywords = req.params.keywords;
  const searchResult: formattedSearch[] = await getSearchResults(keywords);
  res.json(searchResult);
});

export { searchRouter };
