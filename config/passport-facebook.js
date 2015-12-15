var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/user');

module.exports = function(passportFacebook) {
  passportFacebook.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passportFacebook.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      console.log('deserializing user: ' + user);
      done(err, user);
    });
  });

  passportFacebook.use('facebook', new FacebookStrategy({
    clientID: process.env.COFFEECODER_FACEBOOK_API_KEY,
    clientSecret: process.env.COFFEECODER_FACEBOOK_API_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    enableProof: true,
    profileFields: ['name', 'emails']
  }, function(accessToken, refreshToken, profile, done) {

    // // Use this to see the information returned from Facebook
    console.log(profile);
    process.nextTick(function() {
      User.findOne({
        'fb.id': profile.id
      }, function(err, user) {
        if (err) return done(err);
        if (user) {
          return done(null, user);
        } else {
          var newUser = new User();
          newUser.fb.id = profile.id;
          newUser.fb.accessToken = accessToken;
          newUser.fb.email = profile.emails[0].value;
          newUser.save(function(err) {
            if (err) return done(err);
            return done(null, newUser);
          });
        };
      });
    });
  }));
};
