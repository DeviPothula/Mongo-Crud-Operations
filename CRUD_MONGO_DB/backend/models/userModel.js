const mongoose = require("mongoose");
const userSchema = require('../schemas/userSchema');
const userModal = mongoose.model('User', userSchema);

module.exports = userModal;