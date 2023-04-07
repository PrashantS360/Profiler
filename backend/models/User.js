const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilepic: {
        type: String,
        default:"https://cdn-icons-png.flaticon.com/512/219/219983.png"
    },
    about: {
        type: String
    },
    followers: {
        type: Array
    },
    interests: {
        type: Array
    },
    primary: {
        type: String
    },
    secondary: {
        type: String
    },
    linkedin: {
        type: String
    },
    github: {
        type: String
    },
    instagram: {
        type: String
    },
    twitter: {
        type: String
    },
    website: {
        type: String
    },
    facebook: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;