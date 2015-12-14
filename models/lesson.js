var mongoose = require('mongoose');

var lessonSchema = new mongoose.Schema({
  title: {type: String, required: true},
  content: {type: String, required: true},
  difficulty: {type: Number, required: true},
  expectedResult: {type: String, required: true}
});

module.exports = mongoose.model('Lesson', lessonSchema);
