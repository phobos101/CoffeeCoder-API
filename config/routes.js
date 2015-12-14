// Require packages
var express = require('express');

// Require controllers
var lessonController = require('../controllers/lessonController');
var userController = require('../controllers/userController');

// Establish 'router'
var router = express.Router();

router.route('/lessons')
  .get(lessonController.allLessons);

router.route('/lessons/:id')
  .get(lessonController.showLesson);

router.route('/users')
  .get(userController.allUsers);

module.exports = router;
