var express  = require('express');
var router   = express.Router();

router.get('/', function(req,res){
  res.render('main', {user: req.user});
});

router.get('/recommend.ejs', function(req,res){
  res.render('recommend', {user: req.user});
});

router.get('/bathandbody.ejs', function(req,res){
  res.render('bathandbody', {user: req.user});
});

router.get('/fragrance.ejs', function(req,res){
  res.render('fragrance', {user: req.user});
});

router.get('/mypage.ejs', function(req,res){
  res.render('mypage', {user: req.user});
});

router.get('/list.ejs', function(req,res){
  res.render('list', {user: req.user});
});

router.get('/product.ejs', function(req,res){
  res.render('product', {user: req.user});
});

router.get('/homefragrance.ejs', function(req,res){
  res.render('homefragrance', {user: req.user});
});

router.get('/search.ejs', function(req,res){
  res.render('search', {user: req.user});
});
module.exports = router;