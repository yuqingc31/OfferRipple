import { Div } from './styledSearchBar';

const SearchBar = () => {
  return (
    <Div className="adminSearchBarContainer">
      <input placeholder="enter ID to search..." value="" />
      <button>Search</button>
    </Div>
  );
};

export default SearchBar;
