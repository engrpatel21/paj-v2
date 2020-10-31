const mongoose = require('mongoose')
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


module.exports = mongoose.model('Project', projectSchema)