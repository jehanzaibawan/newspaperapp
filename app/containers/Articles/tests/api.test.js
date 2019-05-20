import fetchArticlesFromAPI from 'containers/Articles/api';

describe('fetchArticlesFromAPI', () => {
  it('shoud call the endpoint and return the data', async () => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    fetchArticlesFromAPI();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=qG808Xn6G5zAb6Wm0e6hS52JQjS6L2Er',
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
