var express = require('express');
var router = express.Router();
var pool = require('./db.js');

router.get('/', function(req, res, next) {
    res.redirect('/bathandbody/list/1');
});

router.get('/list/:page', function(req, res, next) {
  var page = req.params.page;
    pool.getConnection(function(err, connection) {
        var sqlForSelectList = "SELECT p_id, p_name, p_price, p_brand, p_img FROM product WHERE p_category=2";
        connection.query(sqlForSelectList, function(err, rows) {
            if(err) console.error("err: " + err);
            console.log("rows:" + JSON.stringify(rows));

            res.render('bathandbody', {rows:rows, page:page, length:rows.length-1, page_num:12, pass:true});
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