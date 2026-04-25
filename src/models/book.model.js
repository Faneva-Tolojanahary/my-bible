const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema({
    meta: {
        type: Object,
    }
}, {
    strict: false
});

module.exports = mongoose.model('books', bookSchema);