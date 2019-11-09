const path = require('path');
const Book = require('./model');

const routes = (app) => {
    app.get('/book', (req, res) => {
        Book.find({}, (err, result) => {
            if (err) throw err;
            res.json(result);
        });
    });
    app.post('/book', (req, res) => {
        const book = new Book({
            name: req.body.name,
            isbn: req.body.isbn,
            author: req.body.author,
            pages: req.body.pages
        });
        book.save((err, result) => {
            if (err) throw err;
            res.json({
                message: "Successfully added book",
                book: result
            });
        });
    });
    app.delete("/book/:isbn", (req, res) => {
        Book.findOneAndRemove(req.query, (err, result) => {
            if (err) throw err;
            res.json({
                message: "Successfully deleted the book",
                book: result
            });
        });
    });
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '/public', 'index.html'));
    });
};
module.exports = routes;