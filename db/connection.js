const mysql = require("mysql2");
require('dotenv').config();

const connection = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "",
      database: "personnel_db"
    },
    
  );

  module.exports = connection;