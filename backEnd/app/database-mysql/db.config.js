/*
DB name : osama_nahed
User name : osama_nahed
Passworrd ^z@yjcPE!b2b


module.exports = {
  HOST: "localhost",
  USER: "osama_nahed",
  PASSWORD: "^z@yjcPE!b2b",
  DB: "osama_nahed",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

*/
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "1111",
  DB: "bdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

// var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '1111',
//   database : 'bdb'
// });

// var selectAll = function(callback) {
//   connection.query('SELECT * FROM items', function(err, results, fields) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// module.exports.selectAll = selectAll;
