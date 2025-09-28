const sql = require("mssql");
require("dotenv").config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT, 10),
  options: {
    encrypt: false, // cambiar a true si usas Azure SQL
    trustServerCertificate: true
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log("Conectado a SQL Server");
    return pool;
  })
  .catch(err => {
    console.error("Error al conectar a SQL Server:", err);
     // 🚫 NO cierres el proceso si estás en modo test
  if (process.env.NODE_ENV !== "test") {
    process.exit(1); 
  }
   throw err;
  });

module.exports = {
  sql, poolPromise
};
