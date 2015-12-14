// Require packages
var express = require('express');

// Require controllers
var lessonController = require('../controllers/lessonController');
var userController = require('../controllers/userController');

// Establish 'router'
var router = express.Router();

// Standard routes
router.get('/lessons', lessonController.allLessons);
router.get('/users', userController.allUsers);

module.exports = router;
