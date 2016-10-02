"use strict";
var Express = require('express');
var express = Express;
var app = express();
app.set('view engine', 'ejs');
var port = process.env.PORT || 8080;
app.get('/', function (req, res) {
    res.render('index.ejs', { text: 'ejs rendered text with typescript' });
});
app.listen(port);
