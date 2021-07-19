var mysql = require('mysql');
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'qjatoddl1021',
    database:'opentutorials'
  });
  db.connect();

module.exports = db;