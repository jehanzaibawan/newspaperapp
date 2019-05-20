import { requestArticlesData, receiveArticlesData } from '../actions';
import { REQUEST_ARTICLES_DATA, RECEIVE_ARTICLES_DATA } from '../constants';

describe('Articles actions', () => {
  describe('requestArticlesData', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: REQUEST_ARTICLES_DATA,
      };
      expect(requestArticlesData()).toEqual(expected);
    });
  });
  describe('receiveArticlesData', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: RECEIVE_ARTICLES_DATA,
        data: 'Dummy Data',
      };
      expect(receiveArticlesData('Dummy Data')).toEqual(expected);
    });
  });
});
