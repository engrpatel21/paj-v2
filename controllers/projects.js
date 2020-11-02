const Project = require('../models/project')
const Contributor = require('../models/contributor')

module.exports = {
    index,
    createProject,
    showProject,
    deleteProject,
    updateProject,
}

function updateProject(req, res){
    Project.findByIdAndUpdate(req.params.projectId, req.body, {new: true})
    .then(project => res.json(project))
}

function deleteProject(req, res){
    Project.findByIdAndDelete(req.params.projectId)
    .then(project => {
        Contributor.findOneAndDelete({projectId: req.params.projectId})
            .then(()=> res.json(project))
    })
}

function showProject(req,res){
    Project.findById(req.params.projectId)
    // .populate('features')
    // .populate('owner')
    .then(project => res.json(project))
}

function createProject(req, res){
    req.body.owner = req.user._id
    req.body.ownerName = req.user.name
    Project.create(req.body)
    .then(project =>
        Contributor.create({user: req.user._id, projectId: project._id, isAdmin: true})
        .then(()=> res.json(project))
    )
}

function index(req, res){
    Project.find({})
    .then(project => res.json(project))
}