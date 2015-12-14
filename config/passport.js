var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = function(passport) {
  passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  }, function(req, email, password, done) {
    User.findOne({'local.email': email}, function(err, user) {
      if (err) return done(err, false, {message: 'Something went wrong.'});
      if (user) return done(null, false, {message: 'Email address already registered.'});

      var newUser = new User();
      newUser.email = email;
      newUser.password = User.encrypt(password);
      newUser.lessonsSubbed = req.body.lessonsSubbed;
      newUser.lessonsCreated = req.body.lessonsCreated;
      newUser.lessonsCompleted = req.body.lessonsCompleted;

      newUser.save(function(err, user) {
        if (err) return done(err, false, {message: 'Something went wrong.'});
        return done(null, user);
      });
    });
  }));
};
