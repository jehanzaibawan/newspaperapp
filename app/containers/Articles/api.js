const fetchArticlesFromAPI = async () => {
  const apiResponse = await fetch(
    'https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=qG808Xn6G5zAb6Wm0e6hS52JQjS6L2Er',
  );
  const apiResponseToJSON = await apiResponse.json();
  return apiResponseToJSON;
};

export default fetchArticlesFromAPI;
