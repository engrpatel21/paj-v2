const User = require('../models/user')

module.exports ={
    index,
    createMessage,
    deleteMessage
}

function deleteMessage(req, res){
    User.findById(req.params.userId)
    .then(user =>{
        const idx = user.messages.findIndex(message => message._id.equals(req.params.messageId))
        user.messages.splice(idx,1)
        user.save().then(user =>
            res.json(user.messages)
            )
    })
}

function index(req, res){
    User.findById(req.params.userId)
    .populate('createdBy')
    .then(user => 
        res.json(user.messages)
        )
}

function createMessage(req, res){
    User.findById(req.params.userId)
    .then(user => {
        user.messages.push(req.body)
        user.save().then(user => 
            res.json(user)
            )
    })
}