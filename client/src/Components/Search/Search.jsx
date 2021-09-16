import "./Search.css";
const Search = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <i className="fas fa-search"></i>
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => props.handleSearch(e)}
        name="Search"
        placeholder="SEARCH"
        type="text"
        autoFocus
      />
    </form>
  );
};

export default Search;
