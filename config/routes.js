// Require packages
var express = require('express');
var passport = require('passport');
// var jwt = require('jsonwebtoken');

function checkLessonOwner() {
  return function(req, res, next) {
    // var token = req.headers.authorization.split(' ')[1];
    // var decoded = jwt.decode(token, {complete: true});
    // console.log('User ID: ' + decoded.payload);
    console.log(req.user)

    next();
  };
};

// Require controllers
var lessonController = require('../controllers/lessonController');
var userController = require('../controllers/userController');
var authController = require('../controllers/authController');

// Establish 'router'
var router = express.Router();

// Routes for lessons
router.get('/lessons', lessonController.allLessons);
router.post('/lessons',lessonController.createLesson);

router.get('/lessons/:id', lessonController.showLesson);
router.put('/lessons/:id', lessonController.updateLesson);
router.delete('/lessons/:id', lessonController.deleteLesson);

// Routes for users
router.route('/users')
  .get(userController.allUsers);

router.route('/users/:id')
  .get(userController.showUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

// Routes for authentication
router.post('/login', authController.login);
router.post('/register', authController.register);

router.get('/auth/facebook',
  passport.authenticate('facebook', {
    scope: 'email'
  })
);

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/'
  })
);

module.exports = router;
