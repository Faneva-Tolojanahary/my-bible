const Book = require("../models/book.model")


exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({}, "meta").sort('meta.order');
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