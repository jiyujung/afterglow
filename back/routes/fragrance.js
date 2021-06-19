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
    res.redirect('/fragrance/list/1');
});

router.get('/list/:page', function(req, res, next) {
  var page = req.params.page;
    pool.getConnection(function(err, connection) {
        var sqlForSelectList = "SELECT p_name, p_price, p_brand, p_img FROM product WHERE p_category=1";
        connection.query(sqlForSelectList, function(err, rows) {
            if(err) console.error("err: " + err);
            console.log("rows:" + JSON.stringify(rows));

            res.render('fragrance', {rows:rows, page:page, length:rows.length-1, page_num:12, pass:true});
            console.log(rows.length-1);
            connection.release;
        })
    })
})

module.exports = router;