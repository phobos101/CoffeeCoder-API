// Require packages
var express = require('express');

// Require controllers
var lessonController = require('../controllers/lessonController');

// Establish 'router'
var router = express.Router();

// Standard routes
router.get('/lessons', lessonController.allLessons);
router.get('/users', usersController.allusers);

module.exports = router;
