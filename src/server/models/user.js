const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    rank: {type: Number},
    count: {type: Number, default: 0},
    joinedDate: {type: Date, default: new Date()}
});

const User = mongoose.model('user',UserSchema);

module.exports = {User, UserSchema};