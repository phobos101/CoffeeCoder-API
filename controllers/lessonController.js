var Lesson = require('../models/lesson');

function allLessons(req, res) {
  Lesson.find(function(err, lessons) {
     if (err) return res.status(404).json({message: 'Something went wrong.'});
     res.status(200).json({lessons: lessons});
   });
};

function showLesson(req, res) {
  var id = req.params.id;

  Lesson.findById({_id:id}, function(err, lesson) {
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    if (!lesson) return res.status(204).json({message: 'No lesson found with provided ID.'});
    res.status(200).json({lesson: lesson});
  });
};

module.exports = {
  allLessons: allLessons,
  showLesson: showLesson
};
