var express  = require('express');
var router   = express.Router();

router.get('/', function(req,res){
  res.render('main', {user: req.user});
});

router.get('/recommend', function(req,res){
  res.render('recommend.ejs', {user: req.user});
});

router.get('/mypage', function(req,res){
  res.render('mypage.ejs', {user: req.user});
});

router.get('/list', function(req,res){
  res.render('list.ejs', {user: req.user});
});

router.get('/homefragrance', function(req,res){
  res.render('homefragrance.ejs', {user: req.user});
});

router.get('/search', function(req,res){
  res.render('search.ejs', {user: req.user});
});

module.exports = router;