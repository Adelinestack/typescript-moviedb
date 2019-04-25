import React, { PureComponent } from 'react';
import { getSearchResults } from '../services/moviesApi';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import SearchResults from './SearchResults';
import { formattedSearch } from '../../../types/searchTypes';
import {
  SearchbarContainer,
  Searchbar,
  SearchLogo,
  SearchResultsContainer,
} from '../stylized/searchbarStyle';

interface ISearchBarProps extends RouteComponentProps {}

interface ISearchBarState {
  keywords: string;
  searchResults: formattedSearch[];
}

class SearchBar extends PureComponent<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);
    this.state = {
      keywords: '',
      searchResults: [],
    };
  }

  resetSearch = () => {
    this.setState({ searchResults: [] });
  };

  onChange = ({
    currentTarget: { value: keywords },
  }: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      { keywords },
      keywords.length > 0 ? this.fetchSearch : this.resetSearch
    );
  };

  async fetchSearch() {
    const { keywords } = this.state;
    const searchResults = await getSearchResults(keywords);
    this.setState({
      searchResults,
    });
  }

  onClick = (
    mediaType: string,
    mediaId: number,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    this.setState({
      keywords: '',
      searchResults: [],
    });
    this.props.history.push(`/${mediaType}/${mediaId}`);
    window.scrollTo(0, 0);
  };

  render() {
    const { searchResults } = this.state;

    return (
      <SearchbarContainer>
        <SearchLogo className="fas fa-search" />
        <Searchbar
          type="text"
          placeholder="Enter keywords"
          value={this.state.keywords}
          onChange={this.onChange.bind(this)}
        />
        <SearchResultsContainer>
          <SearchResults
            searchedMedias={searchResults}
            onClick={this.onClick.bind(this)}
          />
        </SearchResultsContainer>
      </SearchbarContainer>
    );
  }
}
export default withRouter(SearchBar);
