var User = require('../models/user');

function allUsers(req, res) {
  User.find(function(err, users) {
     if (err) return res.status(404).json({message: 'Something went wrong.'});
     res.status(200).json({users: users});
   });
};

function showUser(req, res) {
  var id = req.params.id;
  User.findById({_id: id}, function(err, user) {
    if (err) return res.status(500).json({message: 'Something went wrong.'});
    if (!user) return res.status(204).json({message: 'No user found with provided ID.'});
    res.status(200).json({user: user});
  });
};

function updateUser(req, res) {
  var id = req.params.id;
  User.findByIdAndUpdate({_id: id}, req.body, function(err, user) {
    if (err) return res.status(500).json({message: "Something went wrong."});
    if (!user) return res.status(204).json({message: 'No user found with provided ID.'});

    user.save(function(err, user) {
      if (err) return res.status(500).json({message: "There was an error updating your user."})

      res.status(200).json({message: 'User successfully updated.', user: user});
    });
  });
};

function deleteUser(req, res) {
  var id = req.params.id;

  User.remove({_id: id}, function(err) {
    if (err) return res.status(500).json({message: 'Error deleting the user.'});
    res.status(200).json({message: 'User removed successfully.'});
  });
};

module.exports = {
  allUsers: allUsers,
  showUser: showUser,
  updateUser: updateUser,
  deleteUser: deleteUser
};
