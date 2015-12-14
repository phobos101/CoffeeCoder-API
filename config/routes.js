// Require packages
var express = require('express');

// Require controllers
var lessonController = require('../controllers/lessonController');
var userController = require('../controllers/userController');

// Establish 'router'
var router = express.Router();

router.route('/lessons')
  .get(lessonController.allLessons)
  .post(lessonController.createLesson);

router.route('/lessons/:id')
  .get(lessonController.showLesson)
  .put(lessonController.updateLesson)
  .delete(lessonController.deleteLesson);

router.route('/users')
  .get(userController.allUsers);

module.exports = router;
