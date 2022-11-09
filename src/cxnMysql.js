require('dotenv').config();
const mysql = require('mysql2');
const {DB_HOST, DB_USER, DB_NAME, DB_PASS } = process.env;

const cxn = mysql.createConnection({
  host: DB_HOST || 'localhost',
  user: DB_USER || 'root',
  database: DB_NAME,
  password: DB_PASS
});


module.exports = cxn;