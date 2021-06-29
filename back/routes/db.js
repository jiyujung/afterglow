// MySQl 로드
var mysql = require('mysql');
const { connect } = require('./main');
var pool = mysql.createPool(
  {
    connectionLimit:10,
    host: "localhost",
    user: "afterglow",
    password: "AOVImSs9WIoCF4yL",
    database: "afterglow"
  });

module.exports=pool;
