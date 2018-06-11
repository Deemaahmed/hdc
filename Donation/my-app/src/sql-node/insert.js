var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '00119922deema',
  database: 'users',
  insecureAuth: 'true'
});
connection.connect();

connection.on('error', function(err) {
  console.log("[mysql error]",err);
});
