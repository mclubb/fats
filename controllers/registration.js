var user = require('../models/user');

module.exports = {
    create: function(req, res, callback) {
        // TODO
        // Check to see if the user is already in the system, not sure but create may do that already
        user.create(req.body.firstname,
            req.body.lastname,
            req.body.username,
            req.body.password,
            req.body.age,
            req.body.height,
            req.body.weight, function(err, userId) {
                if(err) {
                    return callback(err, null);
                }
                msg = "Thank you for registering. This is user " + userId;
                return callback(null, msg);
        });
    }
}