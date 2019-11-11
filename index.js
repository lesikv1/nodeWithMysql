const mysql = require('mysql');


if (!process.env.USER) {
  throw new Error('no user')
}

if (!process.env.PASSWORD) {
  throw new Error('no password')
}

if (!process.env.HOST) {
  throw new Error('no host')
}

if (!process.env.DATABASE) {
  throw new Error('no database')
}

if (!process.env.TABLE) {
  throw new Error('no table')
}

const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.HOST,
  user            : process.env.USER,
  password        : process.env.PASSWORD,
  database        : process.env.DATABASE
});

pool.query(`SELECT * FROM ${process.env.TABLE}`, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
