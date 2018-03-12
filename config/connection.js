var mysql = require('mysql');

//LOCAL DATABASE CONNECTION
var connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
});

//DEPLOYED DATABASE CONNECTION

// var connection = mysql.createConnection({
//     port: 3306,
//     host: '',
//     user: '',
//     password: '',
//     database: 'burgers_db'
// });

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;