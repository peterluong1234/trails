const mongoose = require('mongoose')

const trailSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    start: String,
    end: String,
    type: String,
    photoUrl: String,
    usersFollowing: []
})

module.exports = mongoose.model('Trail', trailSchema);