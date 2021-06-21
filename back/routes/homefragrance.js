var express = require('express');
var router = express.Router();

// MySQl 로드
var mysql = require('mysql');
const { connect } = require('./main');
var pool = mysql.createPool(
  {
    connectionLimit:3,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  });

router.get('/', function(req, res, next) {
    res.redirect('/homefragrance/list/1');
});

router.get('/list/:page', function(req, res, next) {
  var page = req.params.page;
    pool.getConnection(function(err, connection) {
        var sqlForSelectList = "SELECT p_id, p_name, p_price, p_brand, p_img FROM product WHERE p_category=3";
        connection.query(sqlForSelectList, function(err, rows) {
            if(err) console.error("err: " + err);
            console.log("rows:" + JSON.stringify(rows));

            res.render('homefragrance', {rows:rows, page:page, length:rows.length-1, page_num:12, pass:true});
            console.log(rows.length-1);
            connection.release;
        })
    })
})

router.get('/list/product/:p_id',function(req,res,next) {
  var p_id = req.params.p_id;
  pool.getConnection(function(err, connection) {
    var sql = "SELECT * FROM product WHERE p_id=?";
    connection.query(sql, [p_id], function(err,row) {
      if(err) console.error(err);
      res.render('product', {row:row[0]});
      connection.release;
    });
  })
});

module.exports = router;