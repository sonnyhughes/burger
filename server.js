//DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();

//SERVE UP PULBIC FOLDER AS STATIC FILES TO EXPRESS SERVER
app.use(express.static('public'));

//BODY-PARSER
app.use(bodyParser.urlencoded({
    extended: false
}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//REQUIRE HANDLEBARS
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//LINK TO BURGER CONTROLLER AND DEFAULT TO "/"
var routes = require('./controllers/burgerController.js');
app.use('/', routes);

//LISTENING ON PORT 3000 IF UNDEFINED
app.listen(process.env.PORT || 3000);