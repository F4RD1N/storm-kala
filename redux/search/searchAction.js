import axios from "axios";

//preset
import { searchPreset } from "../../presets";

const fetchSearchRequest = () => {
  return {
    type: "FETCH_SEARCH_REQUEST",
  };
};

const fetchSearchSuccess = (results) => {
  return {
    type: "FETCH_SEARCH_SUCCESS",
    payload: searchPreset(results),
  };
};

const fetchSearchFailure = (error) => {
  return {
    type: "FETCH_SEARCH_FAILURE",
    payload: error,
  };
};
export const clearSearch = () => {
  return {
    type: "CLEAR_SEARCH"
  };
};

export const fetchSearch = (query, page = 1) => {
  return (dispatch) => {
    dispatch(fetchSearchRequest());
    axios
      .get(`search/?q=${query}&page=${page}`)
      .then((response) => {
        const items = response.data;
        dispatch(fetchSearchSuccess(items));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchSearchFailure(errorMsg));
      });
  };
};
