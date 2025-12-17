import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchParams.get("q"));
  };
  return (
    <div>
      <h1>This is a Search Page</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor="">Search</label>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchParams({ q: e.target.value })}
        />
        <br />
        <br />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;
