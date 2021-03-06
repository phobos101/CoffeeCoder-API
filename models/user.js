var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  lessonsSubbed: [{type: mongoose.Schema.ObjectId, ref: 'Lesson'}],
  lessonsCompleted: [{type: mongoose.Schema.ObjectId, ref: 'Lesson'}],
  lessonsCreated: [{type: mongoose.Schema.ObjectId, ref: 'Lesson'}],
  points: {type: Number},
  local: {
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
  }
});

// Create a statics to encrypt the password
userSchema.statics.encrypt = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null);
};

// Create an instance method to validate any specific user
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
