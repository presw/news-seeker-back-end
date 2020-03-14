const NewsAPI = require('newsapi');
const { newsApiKey } = require('../../config');
const newsapi = new NewsAPI(newsApiKey);

module.exports.queryTopHeadlines = (req, res, callback) => {
  try {
    const options = req.query;
    newsapi.v2.topHeadlines(options)
      .then(response => {
        res.body = response;
        callback(null, response);
      })
  } catch (err) {
    callback(err);
  }
};

module.exports.queryArticles = (req, callback) => {
  // TODO
};
