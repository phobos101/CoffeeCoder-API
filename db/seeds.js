var mongoose = require('mongoose');
var config = require('../config/config');
var Lesson = require('../models/lesson');

mongoose.connect(config.database);

var demoLesson = new Lesson({
  title: 'Demo Lesson',
  content: '1. Write an immediatly invoked functional expression that prints "C0FF33C0D3R R0CK5!" to the screen.',
  difficulty: 2
});

demoLesson.save(function (err, demoLesson) {
  if (err) return console.log('[ERROR] - ' + err);
  console.log('[+] - ' + demoLesson.title + ' added. Lesson content:\n ' + demoLesson.content);
});
