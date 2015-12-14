var Lesson = require('../models/lesson');

function allLessons(req, res) {
  Lesson.find(function(err, lessons) {
     if (err) return res.status(404).json({message: 'Something went wrong.'});
     res.status(200).json({lessons: lessons});
   });
};

function showLesson(req, res) {
  
};

module.exports = {
  allLessons: allLessons,
  showLesson: showLesson
};
