import makeSelectArticles from 'containers/Articles/selectors';
import { articles } from 'mockData/articles';

describe('makeSelectArticles', () => {
  it('should select the articles', () => {
    const data = {
      articles,
    };
    const mockedState = {
      articles,
    };
    expect(makeSelectArticles()(mockedState)).toEqual(data.articles);
  });
});
