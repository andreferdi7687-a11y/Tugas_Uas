// 1. PASTIKAN BARIS INI ADA DI PALING ATAS FILE, LEK!
const { Sequelize } = require('sequelize'); 

// 2. Baru di bawahnya masukkan konfigurasi koneksi cloud kita tadi
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false
      }
    }
  }
);

module.exports = sequelize;