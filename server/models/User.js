const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    image: String,
    uid: String,
});

module.exports = mongoose.model('Users', UsersSchema);

