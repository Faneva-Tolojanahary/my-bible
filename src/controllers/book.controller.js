const Book = require("../models/book.model")


exports.getOldTestament = async (req, res) => {
    try {
        const books = await Book.find({ "meta.order" : { $lte: 38 } }, "meta").sort('meta.order');
        res.json(books); 
    } catch (error) {
        res.json({error})
    }
}

exports.getNewTestament = async (req, res) => {
    try {
        const books = await Book.find({ "meta.order" : { $gte: 39 } }, "meta").sort('meta.order');
        res.json(books); 
    } catch (error) {
        res.json({error})
    }
}

exports.getBookByName = async (req, res) => {
    const { name } = req.params;
    try {
        const book = await Book.findOne({ 'meta.name': name });
        res.json(book);
    } catch (error) {
        res.json({error});
    }
}