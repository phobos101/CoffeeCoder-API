var passport = require('passport');
var jwt = require('jsonwebtoken');
var User = require('../models/user');
var secret = process.env.COFFEECODER_SECRET;

function register(req, res, next) {
  var localStrategy = passport.authenticate('local-signup', function(err, user, info) {
    if (err) return res.status(500).json({message: 'Something went wrong!'});
    if (info) return res.status(418).json({message: info.message});
    if (!user) return res.status(409).json({message: 'User already exists!'});

    // User has authenticated so issue token
    var token = jwt.sign(user, secret, {expiresIn: 60 * 60 * 24});

    // Send back the token to the front-end to store
    return res.status(200).json({
      success: true,
      message: 'Thank you for authenticating',
      token: token,
      user: user
    });
  });

  return localStrategy(req, res, next);
};

function login(req, res, next) {
  User.findOne({'email': req.body.email}, function(err, user) {
    if (err) return res.status(500).json(err);
    if (!user) return res.status(403).json({message: 'No account found with provided credentials.'});
    if (!user.validPassword(req.body.password)) return res.status(403).json({message: 'Authentication failed.'});

    var token = jwt.sign(user, secret, {expiresIn: 60 * 60 * 24});

    return res.status(200).json({
      success: true,
      message: 'You have logged in sucessfully!',
      token: token,
      user: user
    });
  });
};

module.exports = {
  login: login,
  register: register
};
