var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = function(passportLocal) {
  passportLocal.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, function(req, email, password, done) {
    User.findOne({'local.email': email}, function(err, user) {
      if (err) return done(err, false, {message: 'Something went wrong.'});
      if (user) return done(null, false, {message: 'Email address already registered.'});

      var newUser = new User();
      newUser.local.email = email;
      newUser.local.password = User.encrypt(password);

      newUser.save(function(err, user) {
        if (err) return done(err, false, {message: 'Something went wrong.'});
        return done(null, user);
      });
    });
  }));
};
