const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    phone: {
        type: String
    }
})

const users = mongoose.model('User', UserSchema);

module.exports = users