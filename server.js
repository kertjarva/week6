const express = require('express');
const booksRouter = require('./routes/books');
const countriesRouter = require('./routes/countries');
const port = 3000;

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    
    res.render('index');
});

app.use('/books', booksRouter);
app.use('/countries', countriesRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});