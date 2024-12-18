const mysql = require("mysql2");

// Create the connection pool.
const conn = mysql.createConnection({
  host: "localhost",
  user: "W2_87325_Rajvardhan",
  password: "manager",
  database: "webdev",
});

module.exports = conn;
