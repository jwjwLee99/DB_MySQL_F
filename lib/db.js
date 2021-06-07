var mysql = require('mysql'); //mysql 불러오기

var db = mysql.createConnection({ //mysql
    host:'',
    user:'',
    password:'',
    database:''
});
db.connect(); //실행

module.exports = db;