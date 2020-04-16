const NewsAPI = require('newsapi');
const NEWS_API_KEY = process.env.NEWS_API_KEY;
const newsapi = new NewsAPI(NEWS_API_KEY);

module.exports.queryTopHeadlines = (query, callback) => {
  newsapi.v2.topHeadlines(query)
  .then(response => {
    callback(null, response);
  })
  .catch(err => {
    callback(err, null);
  });
};

module.exports.queryArticles = (query, callback) => {
  newsapi.v2.everything(query)
  .then(response => {
    callback(null, response);
  })
  .catch(err => {
    callback(err, null);
  });
};
