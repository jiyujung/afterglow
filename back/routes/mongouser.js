const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    id: String,
    data: String,
});
module.exports = mongoose.model('User', userSchema);