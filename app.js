const express = require('express');

const app = express();

const bodyParser = require('body-parser');

var book = null;
var description = null;

app.listen(3000);

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.get('/', (req, res, next) => {
    res.render('index', {pageTitle: 'Add Book'});
});

app.get('/book', (req, res, next) => {
    res.render('book', {
      pageTitle: 'Book',
      book: book,
      description: description,
      hasBook: book.length > 0
    });
});

app.post('/add-book', (req, res, next) => {
    book = {name: req.body.username,
            description: req.body.description };
    res.redirect('/book');
});

