import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';
import NewMovies from './NewMovies';
import Movie from './Movie';
import People from './People';
import Tv from './Tv';
import Error from './Error';
import { getUpcoming } from '../services/moviesApi';
import { IMovie } from '../../../types/movieTypes';
import { Container, PagesContainer, Main } from '../stylized/appStyle';

interface IAppState {
  upcomingMovies: IMovie[];
}
interface IAppProps {}

export default class App extends Component<IAppProps, IAppState> {
  state = {
    upcomingMovies: [],
  };

  componentDidMount() {
    this.fetchUpcomingMovies();
  }

  async fetchUpcomingMovies() {
    const upcomingMovies = await getUpcoming();
    this.setState({
      upcomingMovies,
    });
  }
  render() {
    const { upcomingMovies } = this.state;
    const loadingElement = upcomingMovies.length === 0 && (
      <Container>
        <i className="fas fa-3x fa-spinner fa-pulse" />
      </Container>
    );

    return (
      loadingElement || (
        <BrowserRouter>
          <Container>
            <Header />
            <Main>
              <SearchBar />
              <PagesContainer>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={props => (
                      <NewMovies {...props} upcomingMovies={upcomingMovies} />
                    )}
                  />
                  <Route
                    exact
                    path="/movie/:movieId"
                    render={props => <Movie {...props} />}
                  />
                  <Route
                    exact
                    path="/person/:peopleId"
                    render={props => <People {...props} />}
                  />
                  <Route
                    exact
                    path="/tv/:tvId"
                    render={props => <Tv {...props} />}
                  />
                  <Route path="/" component={Error} />
                </Switch>
              </PagesContainer>
            </Main>
          </Container>
        </BrowserRouter>
      )
    );
  }
}
