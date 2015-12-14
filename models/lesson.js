var mongoose = require('mongoose');

var lessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  difficulty: Number
});

module.exports = mongoose.model('Lesson', lessonSchema);
