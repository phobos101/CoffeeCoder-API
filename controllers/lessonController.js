var Lesson = require('../models/lesson');

function allLessons(req, res) {
  Lesson.find(function(err, lessons) {
     if (err) return res.status(404).json({message: 'Something went wrong.'});
     res.status(200).json({lessons: lessons});
   });
};

function showLesson(req, res) {
  var id = req.params.id;
  Lesson.findById({_id: id}, function(err, lesson) {
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    if (!lesson) return res.status(204).json({message: 'No lesson found with provided ID.'});
    res.status(200).json({lesson: lesson});
  });
};

function createLesson(req, res) {
  var lesson = new Lesson(req.body);
  lesson.author = req.user;
  lesson.save(function(err) {
    if (err) return res.status(500).json({message: "Error creating a new lesson."});
    res.status(201).json({lesson: lesson});
  });
};

function updateLesson(req, res) {
  var id = req.params.id;

  Lesson.findByIdAndUpdate({_id: id}, req.body, function(err, lesson) {
    if (err) return res.status(500).json({message: "Something went wrong."});
    if (!lesson) return res.status(204).json({message: 'No lesson found with provided ID.'});

    lesson.save(function(err, lesson) {
      if (err) return res.status(500).json({message: "There was an error updating your lesson."})

      res.status(200).json({message: 'Lesson successfully updated.', lesson: lesson});
    });
  });
};

function deleteLesson(req, res) {
  var id = req.params.id;

  Lesson.remove({_id: id}, function(err) {
    if (err) return res.status(500).json({message: 'No lesson found with provided ID.'});
    res.status(200).json({message: 'Lesson removed successfully.'});
  });
};

module.exports = {
  allLessons: allLessons,
  showLesson: showLesson,
  createLesson: createLesson,
  updateLesson: updateLesson,
  deleteLesson: deleteLesson
};
