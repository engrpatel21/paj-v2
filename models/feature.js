const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({ 
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    name: String,
    content: String,
    taskStatus:{type: String, enum: ['In Progress', 'Completed', 'Backlog'], default: 'Backlog'},
},{timestamps: true})

const featureSchema = new Schema({
    feature: String,
    description: String,
    featureStatus:{type: String, enum: ['In Progress', 'Completed', 'Backlog'], default: 'Backlog'},
    tasks: [taskSchema],
    project: {type: Schema.Types.ObjectId, ref: 'Project'},
    lead: {type: Schema.Types.ObjectId, ref: 'User'},
},{timestamps: true})

module.exports = mongoose.model('Feature', featureSchema)