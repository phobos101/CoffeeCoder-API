// Require packages
var express = require('express');
var passport = require('passport');
var Lesson = require('../models/lesson');
var User = require('../models/user');

function checkLessonOwner() {
  return function(req, res, next) {
    var user = req.user;
    var id = req.params.id;
    Lesson.findById({_id: id}, function(err, lesson) {
      var author = lesson.author;
      // console.log(user);
      // console.log(author);
      if (user == author) {
        // console.log('User authorized');
        next();
      } else {
        // console.log('Unauthorized');
        res.status(401)
          .json({message: 'You are not permitted to do this action.'});
      };
    });
  };
};

function checkUser() {
  return function(req, res, next) {
    var currentUser = req.user;
    var id = req.params.id;
    User.findById({_id: id}, function(err, user) {
      var selectedUser = user.id;
      // console.log(currentUser);
      // console.log(selectedUser);
      if (currentUser == selectedUser) {
        // console.log('User authorized');
        next();
      } else {
        // console.log('Unauthorized');
        res.status(401)
          .json({message: 'You are not permitted to do this action.'});
      };
    });
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
router.put('/lessons/:id', checkLessonOwner(), lessonController.updateLesson);
router.delete('/lessons/:id', checkLessonOwner(), lessonController.deleteLesson);

// Routes for users
router.get('/users', userController.allUsers);
router.get('/users/:id', userController.showUser);
router.put('/users/:id', checkUser(), userController.updateUser);
router.delete('/users/:id', checkUser(), userController.deleteUser);

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
