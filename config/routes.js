// Require packages
var express = require('express');

// Require controllers
var lessonController = require('../controllers/lessonController');
var userController = require('../controllers/userController');
var authController = require('../controllers/authController');

// Establish 'router'
var router = express.Router();

// Routes for lessons
router.route('/lessons')
  .get(lessonController.allLessons)
  .post(lessonController.createLesson);

router.route('/lessons/:id')
  .get(lessonController.showLesson)
  .put(lessonController.updateLesson)
  .delete(lessonController.deleteLesson);

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

module.exports = router;
