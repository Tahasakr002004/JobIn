import * as actionTypes from './actionTypes';

export const setUser = ( payload ) => {
  return {
    type: actionTypes.SET_USER,
    user:payload,
  }
  
}

export const setLoading = ( status ) => {
  return {
    type: actionTypes.SET_LOADING_STATUS,
    status:status,
    }
};

export const getArticles = ( payload ) => {
  return {
    type: actionTypes.GET_ARTICLES,
    payload: payload,
  }
};
