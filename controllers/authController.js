var passport = require('passport');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var secret = require('../config/config').secret;

function register(req, res, next) {
  var localStrategy = passport.authenticate('local-signup', function(err, user, info) {
    if (err) return res.status(500).json({message: 'Something went wrong! - line 8'});
    if (info) return res.status(418).json({message: info.message});
    if (!user) return res.status(409).json({message: 'User already exists!'});

    // User has authenticated so issue token
    var token = jwt.sign(user._id, secret, {expiresIn: 60 * 60 * 24});

    // Send back the token to the front-end to store
    return res.status(200).json({
      success: true,
      message: 'Thank you for authenticating',
      token: token,
    });
  });

  return localStrategy(req, res, next);
};

function login(req, res, next) {
  User.findOne({'local.email': req.body.email}, function(err, user) {
    if (err) return res.status(500).json(err);
    if (!user) return res.status(403).json({message: 'No account found with provided credentials.'});
    if (!user.validPassword(req.body.password)) return res.status(403).json({message: 'Authentication failed.'});
    var token = jwt.sign(user._id, secret, {expiresIn: 60 * 60 * 24});

    return res.status(200).json({
      success: true,
      message: 'You have logged in sucessfully!',
      token: token,
    });
  });
};

module.exports = {
  login: login,
  register: register
};
