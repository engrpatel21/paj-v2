const Project = require('../models/project')

module.exports = {
    createComment,    
    index,
    deleteComment,
    updateComment
}

function updateComment(req, res){
    req.body.createdBy = req.user._id
    Project.findById(req.params.projectId)
    .then(project => {
        const idx = project.comments.findIndex(comment => comment._id.equals(req.params.commentId))
        project.comments.splice(idx,1,req.body)
        project.save().then(project =>
            res.json(project)
            )
    })
}

function deleteComment(req, res){
    Project.findById(req.params.projectId)
    .then(project => {
        const idx = project.comments.findIndex(comment => comment._id.equals(req.params.commentId))
        project.comments.splice(idx,1)
        project.save().then(project =>
            res.json(project)
            )
    })
}

function index(req,res){
    Project.findById(req.params.projectId)
    .populate('comments.createdBy')
    .then(project =>
        res.json(project)
        )
}

function createComment(req, res){
    req.body.createdBy = req.user._id
    Project.findById(req.params.projectId)
    .then(project =>{
        project.comments.push(req.body)
        project.save().then( project =>
            res.json(project)
            )
    })
}

