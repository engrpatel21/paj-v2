const mongoose = require('mongoose')
const User = require('./user')
const Schema = mongoose.Schema


const commentSchema = new Schema({
    comment: String,
    createdBy: {type: Schema.Types.ObjectId, ref: 'User'}
},{timestamps: true})

const projectSchema = new Schema({
    name: String,
    owner:  { type: Schema.Types.ObjectId, ref: 'User'},
    ownerName: String,
    status:{type: Boolean, default: false},
    description: String,
    comments: [commentSchema],
    isPublic: {type: Boolean, default: false}

},{timestamps: true})

projectSchema.post('deleteOne', document => {
    const projectId = document._id
    User.find({ projects: {$in: [projectId]} })
        .then( users => {
            Promise.all(
                users.map(user => 
                    User.findOneAndUpdate( user._id, { $pull: { projects: projectId}}, {new: true})
                ),
                users.save()
            )
        })
})


module.exports = mongoose.model('Project', projectSchema)