var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./routes/index');
var app = express();

//use session
app.use(session({
 secret: '@#@$SECRET#@$#$',
 resave: false,
 saveUninitialized: true
}));

//templete engine
app.set('views', './views');
app.set('view engine', 'jade');

//middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('./public'));

app.use('/', routes);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    res.status(404);
    res.render('error');
});

app.listen(8080, () => {
    console.log("server is running on port 8080");
});

module.exports = app;