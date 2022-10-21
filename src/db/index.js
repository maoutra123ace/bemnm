const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "clothes"
});

db.connect(error => {
    if (error) {
        console.log('That bai db');

    }else console.log('thanh cong db');
})
module.exports = db