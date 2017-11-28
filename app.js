var express = require('express');
var Sequelize = require('sequelize');
var createController = require('./controllers/createController');
var viewController = require('./controllers/viewController');
var loginController = require('./controllers/loginController');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});


var sequelize = new Sequelize('uniqeyDB','root','',{
  dialect:'sqlite',
  host:'localhost',
  storage: './sql/uniqeyDB.db'
});

sequelize.authenticate().then(function(){
  console.log('Got into the database chief');
});

var Users = sequelize.define('Users',{
  name: Sequelize.STRING,
  Email: Sequelize.STRING
});

var UIDs = sequelize.define('UIDs',{
  uid: Sequelize.STRING,
  type: Sequelize.STRING,
  email: Sequelize.STRING
});

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

loginController(app, urlencodedParser, bodyParser, Users, UIDs);
createController(app, urlencodedParser, bodyParser, Users, UIDs);

app.listen(3000);
