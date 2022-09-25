const mysql = require("mysql2");

const connection = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "D@rkw1nd37Elspeth",
      database: "personnel_db"
    },
    
  );

  module.exports = connection;