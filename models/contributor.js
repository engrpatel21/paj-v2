const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contributorSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    notes: String,
    isAdmin: {type: Boolean, default: false},
    projectId: {type: Schema.Types.ObjectId, ref: 'Project'}
},{timestamps: true})

module.exports = module.exports = mongoose.model('Contributor', contributorSchema)