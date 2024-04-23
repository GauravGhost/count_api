const mongoose = require('mongoose')


const url = process.env.MONGODB_URL || "mongodb://mongodb:27017";
const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}

async function connect() {
    try {
        mongoose.connect(url)
        console.log("Connected to DB at", url, options)
    } catch (error) {
        console.log("Failed to connect to DB", error);
    }
}

module.exports = { connect }