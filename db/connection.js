const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username,
    user: 'nico',
    // Your MySQL password
    password: 'Lakers13!',
    database: 'employee_tracker'
});

module.exports = db;