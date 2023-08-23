import * as actionTypes from '../actions/actionTypes';

export const initialState = {
  loading: false,
  articles:[],
};

const articleReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status,
      };
    case actionTypes.GET_ARTICLES:
      return {
        ...state,
        articles:action.payload,
      }
    default:
      return state;
  }
};

export default articleReducer;