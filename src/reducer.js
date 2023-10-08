const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        page: action.payload.page,
      };

    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (elem) => elem.objectID !== action.payload.objectID
        ),
      };

    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload.value,
      };
    case "GET_PREV_PAGE":
      let pn = state.page - 1;
      if (pn <= 0) {
        pn = 0;
      }
      return {
        ...state,

        page: pn,
      };
    case "GET_NEXT_PAGE":
      let pn1 = state.page + 1;
      if (pn1 >= state.nbPages) {
        state.page = 0;
      }
      return {
        ...state,
        page: pn1,
      };
  }
};

export default reducer;
