
const mongoose = require('mongoose')

const countSchema = new mongoose.Schema({
    addCount: {
        type: Number,
        required: true
    },
    updateCount: {
        type: Number,
        require: true
    }
})
const Count = mongoose.model('Count', countSchema);

module.exports = Count;
