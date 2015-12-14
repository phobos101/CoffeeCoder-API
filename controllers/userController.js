var User = require('../models/user');

function allUsers(req, res) {
  User.find(function(err, users) {
     if (err) return res.status(404).json({message: 'Something went wrong.'});
     res.status(200).json({users: users});
   });
};

module.exports = {
  allUsers: allUsers
};
