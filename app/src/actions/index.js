import axios from "axios";
export const IS_LOADING = "IS_LOADING";
export const DATA_LOAD_SUCCESS = "DATA_LOAD_SUCCESS";
export const DATA_LOAD_ERROR = "DATA_LOAD_ERROR";

export const loadDataForLocation = (location) => (dispatch) => {

    dispatch({ type: IS_LOADING });
  
  const apiUrl = 'https://cat-fact.herokuapp.com/facts/';
  axios
    .get(apiUrl)
    .then((res) => {
      console.log(
        res
      );
      dispatch({ type: DATA_LOAD_SUCCESS, payload: res.data.all });
    })
    .catch((err) => {
      console.log(
        err
      );
      console.log(err.request);
      dispatch({
        type: DATA_LOAD_ERROR,
        payload: `error fetching card data: ${err.message}`
      });
    });
};
