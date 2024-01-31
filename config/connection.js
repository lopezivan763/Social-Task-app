const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  const urlParts = new URL(process.env.JAWSDB_URL);
  const dialect = urlParts.protocol ? urlParts.protocol.replace(/:$/, "") : 'mysql';

  sequelize = new Sequelize(process.env.JAWSDB_URL, { dialect });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
