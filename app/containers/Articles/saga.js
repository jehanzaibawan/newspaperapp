import { takeLatest, call, put } from 'redux-saga/effects';
import { REQUEST_ARTICLES_DATA } from './constants';
import { receiveArticlesData } from './actions';
import fetchArticlesFromAPI from './api';

export function* getArticlesData() {
  try {
    const articlesDataReturned = yield call(fetchArticlesFromAPI);
    yield put(receiveArticlesData(articlesDataReturned));
  } catch (ex) {
    // eslint-disable-next-line no-console
    console.log(ex);
  }
}

export default function* articlesSaga() {
  yield takeLatest(REQUEST_ARTICLES_DATA, getArticlesData);
}
