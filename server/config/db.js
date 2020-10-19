const mongoose  = require('mongoose');


const connectDB = async () => {
    try { 
        const conn = mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('mongoose connected');
    } catch(err) {
        console.log(err);
    }
}

module.exports = connectDB;