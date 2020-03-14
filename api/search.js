const { Router } = require('express');
const search = require('./controller/search');
const router = Router();

const searchTopHeadlines = async (req, res) => {
  try {
    search.queryTopHeadlines(req, res, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      res.status(200).json(data);
    });
  } catch (err) {
    console.log(err);
    res.status(400);
  }
};

const searchArticles = async (req, res) => {
  // TODO
};

router.get('/topHeadlines?', searchTopHeadlines);
router.get('/articles?', searchArticles);

module.exports = router;
