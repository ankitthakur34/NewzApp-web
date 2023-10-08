import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";
import "./Stories.css";
const Stories = () => {
  const { hits, nbPages, isLoading, removePost } = useContext(AppContext);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", fontWeight: "bold" }}>Loading....</div>
    );
  }
  return (
    <div id="stories">
      {hits.map((elem, index) => {
        return (
          <div key={index} className="box" style={{}}>
            <h3 className="title">{elem.title}</h3>
            <div className="acDiv">
              <h2 className="author"> By {elem.author}</h2>
              <p>|</p>
              <h1 className="comments">{elem.num_comments} comments </h1>
            </div>

            <div className="remDiv">
              <a className="rm" href={elem.url} target="_blank">
                <span>Read More</span>
              </a>
              <a className="remove" onClick={() => removePost(elem.objectID)}>
                Remove
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
