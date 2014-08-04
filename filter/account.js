/**
 * Created by Sarike on 2014/7/31.
 */

exports.authorize = function(req, res, next) {
    if (!req.session.user) {
        res.redirect('/account/login');
    } else {
        next();
    }
};
