const mysql = require("mysql2");

// Connect to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username,
    user: 'nico',
    // Your MySQL password
    password: 'Lakers13!',
    database: 'employee_tracker'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    }
});

module.exports = connection;