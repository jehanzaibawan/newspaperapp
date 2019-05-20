/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put, call } from 'redux-saga/effects';
import { getArticlesData } from '../saga';
import fetchArticlesFromAPI from '../api';

describe('getArticlesData Saga', () => {
  it('Fetches the articles successfully', () => {
    const generator = getArticlesData();
    expect(generator.next().value).toEqual(call(fetchArticlesFromAPI));
    expect(generator.next().value).toEqual(
      put({
        type: 'app/Articles/RECEIVE_ARTICLES_DATA',
        data: undefined,
      }),
    );
  });

  it('Handles exception as expected', () => {
    const generator = getArticlesData();
    expect(generator.next().value).toEqual(call(fetchArticlesFromAPI));
    generator.throw('error');
  });
});
