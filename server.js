var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');




// Sets up the Express App
// =============================================================
var app = express();
//var PORT = process.env.PORT || 3000;
var PORT = 3000;


// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(methodOverride('_method'))
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

