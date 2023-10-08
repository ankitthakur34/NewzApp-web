import React, { useContext } from "react";
import { AppContext } from "../context/Context";
import "./Serach.css";
const Search = () => {
  const { query, searchPost } = useContext(AppContext);
  return (
    <div className="serachDiv" style={{}}>
      <input
        placeholder="search"
        className="sbox"
        value={query}
        onChange={(e) => searchPost(e.target.value)}
      />
    </div>
  );
};

export default Search;
