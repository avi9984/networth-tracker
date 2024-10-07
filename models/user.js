const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    password: { type: String, minLength: 8, maxLenght: 20, required: true },
}, { timestamps: true, versionKey: false });


const User = mongoose.model('User', userSchema);

module.exports = User;
