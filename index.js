var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.render('index.ejs', {text: 'ejs rendered text'});
});

app.listen(port);
