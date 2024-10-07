const SearchBox = ({ filter, setFilter }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        value={filter}
        type="text"
        onChange={event => setFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
