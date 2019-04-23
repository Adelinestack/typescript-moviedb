import express from 'express';
import bodyParser from 'body-parser';
import { newMoviesRouter } from './routers/newMoviesRouter';
import { movieRouter } from './routers/movieRouter';
import { castRouter } from './routers/castRouter';
import { peopleRouter } from './routers/peopleRouter';
import { tvRouter } from './routers/tvRouter';
import { searchRouter } from './routers/searchRouter';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/newMovies', newMoviesRouter);
app.use('/movie', movieRouter);
app.use('/cast', castRouter);
app.use('/person', peopleRouter);
app.use('/tv', tvRouter);
app.use('/search', searchRouter);

const server = app.listen(8080, () =>
  console.log(`Server started on http://localhost:8080.`)
);
