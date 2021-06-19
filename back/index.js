var express   = require('express');
var app       = express();
const path = require('path')
var passport  = require('passport');
var session   = require('express-session');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(session({secret:'MySecret', resave: false, saveUninitialized:true}));

// Passport setting
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/', require('./routes/main'));
app.use('/auth', require('./routes/auth'));
app.use('/fragrance', require('./routes/fragrance'));

// Port setting
var port = 3000;
app.listen(port, function(){
  console.log('server on! http://localhost:'+port);
});