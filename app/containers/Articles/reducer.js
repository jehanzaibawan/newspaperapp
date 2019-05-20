/*
 *
 * Articles reducer
 *
 */
import produce from 'immer';
import { RECEIVE_ARTICLES_DATA } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const articlesReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case RECEIVE_ARTICLES_DATA:
        return { ...state, ...action.data };
      default:
        return { ...state };
    }
  });

export default articlesReducer;
