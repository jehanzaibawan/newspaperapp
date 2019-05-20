/*
 *
 * Articles actions
 *
 */

import { REQUEST_ARTICLES_DATA, RECEIVE_ARTICLES_DATA } from './constants';

export function requestArticlesData() {
  return {
    type: REQUEST_ARTICLES_DATA,
  };
}

export function receiveArticlesData(data) {
  return {
    type: RECEIVE_ARTICLES_DATA,
    data,
  };
}
