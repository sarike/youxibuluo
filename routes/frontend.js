var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('frontend/index', { title: 'Express' });
});

router.get('/game/:id', function(req, res) {
  res.render('frontend/gameDetail', { gameID: req.param("id") });
});

module.exports = router;
