import React, { useContext } from "react";
import { AppContext } from "../context/Context";
import "./Pagination.css";

const Pagination = () => {
  const { hits, page, nbPages, getPrevPage, getNextPage } =
    useContext(AppContext);
  return (
    <div style={{ textAlign: "center", margin: 5 }}>
      <button className="btn" onClick={() => getPrevPage()}>
        Prev{" "}
      </button>
      <span className="pageN">
        {page + 1} of {nbPages}
      </span>
      <button className="btn" onClick={() => getNextPage()}>
        {" "}
        Next
      </button>
    </div>
  );
};

export default Pagination;
