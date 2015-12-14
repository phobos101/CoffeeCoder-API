var mongoose = require('mongoose');
var config = require('../config/config');
var Lesson = require('../models/lesson');
var User = require('../models/user');

mongoose.connect(config.database);

var demoLesson = new Lesson({
  title: 'Demo Lesson',
  content: '1. Write an immediatly invoked functional expression that prints "C0FF33C0D3R R0CK5!" to the screen.',
  difficulty: 2,
  expectedResult: 'C0FF33C0D3R R0CK5!'
});

demoLesson.save(function(err, demoLesson) {
  if (err) return console.log('[ERROR] - ' + err);
  console.log('[+] - ' + demoLesson.title + ' added.\nLesson content: ' + demoLesson.content);
});

var demoUser = new User({
  email: 'demo@coffeecoder.com',
  password: 'password',
  lessonsSubbed: [demoLesson],
  lessonsCreated: [demoLesson],
  lessonsCompleted: []
});

demoUser.save(function(err, demoUser) {
  if (err) return console.log('[ERROR] - ' + err);
  console.log('[+] - User added:\nEmail: ' + demoUser.email);
});
