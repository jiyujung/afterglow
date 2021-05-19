var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));
var User = require('./mongouser');

router.post('/', function(req, res){
  console.log('served ' + req.body.id + '   ' + req.body.password);
  User.create({
    id: req.body.id,
    data: req.body.password
  })
});

module.exports = router;
