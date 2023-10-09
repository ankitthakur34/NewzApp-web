import React from "react";

import Search from "../src/components/Search";
import Pagination from "../src/components/Pagination";

import Stories from "../src/components/Stories";

const App = () => {
  return (
    <div style={{ padding: 10, margin: 10 }}>
      <div
        style={{
          textAlign: "center",

          margin: "auto",
          marginBottom: 30,
        }}
      >
        <h1 style={{ letterSpacing: 1 }}>Welcome To Techify</h1>
        <p>A place where you find all the latest tech newz...</p>
      </div>
      <Search />
      <Pagination />

      <Stories />
    </div>
  );
};

export default App;
