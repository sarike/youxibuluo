//var BaseModel = require("base");
var _ = require("underscore");
var dbUtil = require("dbutil");

var tableName = "user";

var User = function () {

};


_.extend(User, {
    validate: function (userInfo, callback) {
        var whereClause = dbUtil.escape(userInfo).split(', ').join(" and "),
            sqlStr = "select * from " + tableName
                + " where " + whereClause;
        dbUtil.exec(sqlStr, function (rows) {
            if (rows && rows.length > 0) {
                callback(rows[0]);
            } else {
                callback(null);
            }
        });
    }
});

module.exports = User;