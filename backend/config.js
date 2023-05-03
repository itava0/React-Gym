const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'ivant',
  host: 'localhost',
  database: 'customer',
  password: 'password',
  port: 5432,
});

module.exports = pool;
