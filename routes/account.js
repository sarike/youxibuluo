var express = require('express'),
    User = require('../models/user');
var router = express.Router();

/* GET users listing. */
router.route('/login')
    .get(function(req, res) {
        res.render("account/login");
    })
    .post(function(req, res) {
        User.validate(req.body, function(user) {
            if (user) {
                req.session.user = user;
                res.redirect('/admin');
            } else {
                res.render('account/login');
            }
        });
    });

router.route('/logout')
    .all(function(req, res) {
        req.session.user = null;
        res.redirect('/account/login');
    });

module.exports = router;
