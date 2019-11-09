const mongoose = require('mongoose');
const dbHost = 'mongodb://localhost:27017/Books';

mongoose.connect(dbHost, { useNewUrlParser: true });
mongoose.connection;
mongoose.set('debug', true);
const bookSchema = mongoose.Schema({
    name: String,
    isbn: { type: String, index: true },
    author: String,
    pages: Number
});
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;