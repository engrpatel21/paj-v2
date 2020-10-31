const Feature = require('../models/feature')
const Contributor = require('../models/contributor')
const User = require('../models/user')
const feature = require('../models/feature')

module.exports ={
    createContributor,
    deleteContributor,
    updateContributor,
    index
}

function index(req, res){
    Contributor.find({projectId: req.params.projectId})
    .populate('user')
    .then(contributors => res.json(contributors))
}

function deleteContributor(req, res){
    Contributor.findByIdAndDelete(req.params.contributorId)
    .then((contributor)=>{
        Feature.updateMany({lead: req.params.userId, project: req.params.projectId},{lead: req.user._id})
        .then( feature => {
            User.findById(req.params.userId)
            .then(user=>{
                const idx = user.projects.findIndex(p => p._id.equals(req.params.projectId))
                user.projects.splice(idx,1)
                user.save().then(()=> res.json(contributor))
            })

        })
      
    })
}

function updateContributor(req, res){
    Contributor.findByIdAndUpdate(req.params.contributorId, req.body, {new: true})
    .populate('user')
    .then( contributor => res.json(contributor))
}

// async function deleteContributor(req, res){
//     Project.findById(req.params.projectId)
//     .then(project => {
//         const idx = project.contributors.findIndex(c => c._id.equals(req.params.contributorId))
//         const featureIdx = project.features.findIndex(f => f.lead._id.equals(req.params.userId))
//         project.contributors.splice(idx,1)
//         project.save().then(()=>
//             User.findById(req.params.userId)
//             .then(user =>{
//                 const idx = user.projects.findIndex(p=> p._id.equals(project._id))
//                 user.projects.splice(idx,1)
//                 user.save().then(()=>{
//                     res.json(project)
//                 })
//             })
//         )
//     })
// }

// async function updateContributor(req, res){
//     Project.findById(req.params.projectId)
//     .then(project => {
//         const idx = project.contributors.findIndex(c => c._id.equals(req.params.contributorId))
//         project.contributors.splice(idx,1,req.body)
//         project.save().then(()=>
//             res.json(project)
//         )
//     })
// }

async function createContributor(req, res){

    const user = await User.findOne({email: req.body.user})
    const alreadyContributor = await Contributor.findOne({user: user._id, projectId: req.params.projectId})
    if(!alreadyContributor){
        req.body.user = user._id
        req.body.projectId = req.params.projectId
        user.projects.push(req.params.projectId)
        let contributor = await Contributor.create(req.body)
        contributor = await contributor.populate('user').execPopulate().then(contributor => contributor)
        user.save().then(()=>{
           res.json(contributor)
        })
    }else{
        res.status(200)
    }
    
}