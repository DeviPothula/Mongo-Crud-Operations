const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
})

module.exports = userSchema;