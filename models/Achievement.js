const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AchievementSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Achievement = mongoose.model('Achievement', AchievementSchema)

module.exports = Achievement