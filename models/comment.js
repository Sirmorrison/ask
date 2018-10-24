let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userIdField = require('./userId');
let userIdSchema = new Schema(userIdField, {timestamps: true});

module.exports = {
    comment: {
        type: String,
        required: true
    },
    commentedBy: {
        type: mongoose.Schema.Types.String,
        ref: 'User',
        required: true
    },
    likes: [userIdSchema],
    dislikes: [userIdSchema],
};