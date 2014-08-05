var express = require('express'),
    router = express.Router();

var accountFilter = require("../filter/account");

router.get('/', accountFilter.authorize, function(req, res) {
  res.render('admin/index');
});

module.exports = router;
