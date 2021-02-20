/* eslint-disable no-useless-escape */
const mongoose = require('mongoose');

const memeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    url:{
        type: String,
        required: true,
        trim:true,
    }
});

module.exports = mongoose.model('Memes', memeSchema);
