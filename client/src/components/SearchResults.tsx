import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { API_IMG } from '../utils/APIConst';
import { ImgResult } from '../stylized/searchbarStyle';
import { formattedSearch } from '../../../types/searchTypes';

interface ISearchResultsProps {
  searchedMedias: formattedSearch[];
  onClick(
    mediaType: string,
    id: number,
    e: React.MouseEvent<HTMLAnchorElement>
  ): void;
}

const SearchResults: React.FC<ISearchResultsProps> = ({
  searchedMedias,
  onClick,
}) => {
  const searchResults =
    searchedMedias &&
    searchedMedias.map(({ id, mediaType, title, posterPath }) => (
      <Link
        to={`/${mediaType}/${id}`}
        onClick={onClick.bind(null, mediaType, id)}
        key={id}
      >
        <ImgResult src={`${API_IMG}${posterPath}`} alt={title} />
        <div>
          <p>{title}</p>
        </div>
      </Link>
    ));
  return <div>{searchResults}</div>;
};

export default memo(SearchResults);
