const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.CLEARDB_DATABASE_URL) {
  const dbUrl = process.env.CLEARDB_DATABASE_URL;
  const dbOptions = dbUrl.match(/mysql:\/\/([^:]+):([^@]+)@([^\/]+)\/(.+)\?/);
  
  sequelize = new Sequelize(dbOptions[4], dbOptions[1], dbOptions[2], {
    host: dbOptions[3],
    dialect: 'mysql',
    port: 3306
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: process.env.DB_PORT || 3306
    }
  );
}

module.exports = sequelize;
