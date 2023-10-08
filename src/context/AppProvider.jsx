import React, { useReducer, useEffect } from "react";
import { AppContext } from "./Context";
import reducer from "../reducer";

const api = "https://hn.algolia.com/api/v1/search?";
const initialState = {
  isLoading: true,
  query: "react native",
  nbPages: 0,
  page: 0,
  hits: [],
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removePost = (objectID) => {
    dispatch({
      type: "REMOVE_POST",
      payload: {
        objectID: objectID,
      },
    });
  };

  // search post

  const searchPost = (value) => {
    dispatch({
      type: "SEARCH_POST",
      payload: {
        value: value,
      },
    });
  };

  const getPrevPage = () => {
    dispatch({
      type: "GET_PREV_PAGE",
    });
  };

  const getNextPage = () => {
    dispatch({
      type: "GET_NEXT_PAGE",
    });
  };

  const fetchApiData = async (url) => {
    dispatch({
      type: "SET_LOADING",
    });
    try {
      const res = await fetch(url);
      const data = await res.json();

      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
          page: data.page,
        },
      });

      console.log(state.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(`${api}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  const name = "Ankit Singh Thakur";
  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
