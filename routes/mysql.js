const mysql = require('mysql');

var pool = mysql.createPool({
    "user": "root",
    "password": "root1234",
    "database": "sys",
    "host": "localhost",
    "port": 3306
});

exports.pool = pool;  