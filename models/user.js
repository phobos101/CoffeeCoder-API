var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Lesson = require('./lesson');

var userSchema = new mongoose.Schema({
  email: {type: String, unique: true, required: true},
  password: {type: String, required: true},
  lessons: [Lesson.schema]
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
