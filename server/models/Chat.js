const mongoose = require('mongoose');


const StoreData = new mongoose.Schema({
    storeId: {
        type: Number,
        required: true
    },
    image: String,
    name: String
})

const ChatsSchema = new mongoose.Schema({
    clientUid: String,
    store: StoreData,
    users: [String]
});

module.exports = mongoose.model('Chat', ChatsSchema);
