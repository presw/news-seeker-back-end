const { Router } = require('express');
const search = require('./controller/search');
const router = Router();

const searchTopHeadlines = (req, res) => {
  search.queryTopHeadlines(req.query, (err, data) => {
    if (err) {
      console.log('ERROR:', err);
      res.status(404).send('We encountered an error.');
      return;
    }
    console.log('Data:', data);
    res.status(200).json(data);
  });
};

const searchArticles = (req, res) => {
  search.queryArticles(req.query, (err, data) => {
    if (err) {
      console.log('ERROR:', err);
      res.status(404).send('We encountered an error.');
      return;
    }
    console.log('Article data:', data);
    res.status(200).json(data);
  });
};

router.get('/top-headlines?', searchTopHeadlines);
router.get('/articles?', searchArticles);

module.exports = router;
