const NewsAPI = require('newsapi');
const { newsApiKey } = require('../../config');
const newsapi = new NewsAPI(newsApiKey);

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
