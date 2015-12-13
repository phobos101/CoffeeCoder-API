// Require packages
var express = require('express');

// Require controllers
var lessonController = require('../controllers/lessonController');

// Establish 'router'
var router = express.Router();

// Standard routes
router.get('/lessons', lessonController.allLessons);

module.exports = router;
