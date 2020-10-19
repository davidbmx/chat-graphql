const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        required: true,
        default: Date.now
    },
    type_message: {
        type: String,
        required: true
    },
   type_sender: {
       type: String,
       required: true
   },
   read: {
       type: Boolean,
       default: false
   },
   uid: {
       type: String,
       required: true
   },
   chat: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Chat'
   }
});

module.exports = mongoose.model('Message', MessageSchema);
