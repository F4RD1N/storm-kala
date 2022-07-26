import axios from "axios";
import searchPreset from "../../presets/searchPreset";
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

export const fetchSearch = (query, page = 1) => {
  return (dispatch) => {
    dispatch(fetchSearchRequest());
    axios
      .get(`/search/?q=${query}&page=${page}`)
      .then((response) => {
        const users = response.data;
        dispatch(fetchSearchSuccess(users));
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(fetchSearchFailure(errorMsg));
      });
  };
};