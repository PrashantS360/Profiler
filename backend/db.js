const mongoose = require('mongoose');
require('dotenv').config()
const mongoURI = process.env.MONGO_URI


const connectToMongo = async () => {
    const client = await mongoose.connect(mongoURI).catch(err => { console.log(err); });
    if (!client) {
        return;
    }
    else{
        console.log('Connected to mongo successfully!')
    }
}

module.exports = connectToMongo;