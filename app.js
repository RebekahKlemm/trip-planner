const volleyball = require('volleyball');  //logger
const express = require('express'); //require express
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks');
const tripRoutes = require('./routes/tripRoutes');
const bodyParser = require('body-parser');

// have res.render work with html files
app.set('view engine', 'html');

// when giving html files to res.render, tell it to use nunjucks
app.engine('html', nunjucks.render);

// point nunjucks to the directory containing templates and
// turn off caching; configure returns an Environment instance, which we'll want to use to add Markdown support later.
var env = nunjucks.configure('views', {noCache: true});

//use the logger in case of errors
app.use(volleyball);

//url-encoded & JSON parsing middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set up static route and main page route
app.use(express.static('public'))

app.use('/', tripRoutes);

// catch 404 (i.e., no route was hit) and forward to error handler
app.use('/', function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle all errors (anything passed into `next()`)
app.use('/', function(err, req, res, next) {
    res.status(err.status || 500);
    console.error(err);
    res.send(
        /// You fill in here
    );
});

//sync database (force: true will delete all data in tables each time)
// db.Page.sync({force: false});
// db.User.sync({force: false});

//tell server which port to listen on
app.listen(3000);
console.log('server listening');
