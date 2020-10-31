const User = require("../models/user");

module.exports = {
  index,
  updateUser,
  showLoggedInUserProjects,
  showOneUser,
  getAllUserProjects,
  addFriend,
  differentUser,
};

function index(req, res) {
  User.find({}).then((users) => res.json(users));
}

function differentUser(req, res){
  User.findById(req.params.userId)
  .populate('projects')
  .then(user => 
    {
    res.json(user)}
    )
}

function showOneUser(req, res){
  User.findById(req.user._id)
  .populate('projects')
  .populate('friends')
  .then(user => 
    {
    res.json(user)}
    )
}

function addFriend(req, res){
  User.findById(req.user._id)
  .then(user => {
    if(req.body.friends === req.user._id){
      res.json(user)
    }else{
      user.friends.push(req.body.friends)
      user.save().then(
        res.json(user)
      )
    }
   
  })
}


function showLoggedInUserProjects(req, res){
  User.findById(req.user._id)
  .populate('projects')
  .then(user => 
    res.json(user.projects)
    )
}

function updateUser(req, res){
  User.findByIdAndUpdate(req.user._id, req.body, {new: true})
  .then(user => 
    {  
    res.json(user)}
    )
}

function getAllUserProjects(req, res){
  User.findById(req.params.userId)
  .populate('projects')
  .then(user => 
    res.json(user.projects)
    )
}