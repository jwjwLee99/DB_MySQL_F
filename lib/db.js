var mysql = require('mysql'); //mysql 불러오기

var db = mysql.createConnection({ //mysql
    host:'localhost',
    user:'root',
    password:'991214',
    database:'DB_F'
});
db.connect(); //실행

module.exports = db;