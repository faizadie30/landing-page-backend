require('dotenv').config();

const { DB_HOST_PG, DB_USERNAME_PG, DB_PASSWORD_PG, DB_NAME_PG, DB_PORT_PG } =
  process.env;

module.exports = {
  development: {
    username: DB_USERNAME_PG,
    password: DB_PASSWORD_PG,
    database: DB_NAME_PG,
    host: DB_HOST_PG,
    port: DB_PORT_PG,
    dialect: 'postgres',
  },
  test: {
    username: DB_USERNAME_PG,
    password: DB_PASSWORD_PG,
    database: DB_NAME_PG,
    host: DB_HOST_PG,
    port: DB_PORT_PG,
    dialect: 'postgres',
  },
  production: {
    username: DB_USERNAME_PG,
    password: DB_PASSWORD_PG,
    database: DB_NAME_PG,
    host: DB_HOST_PG,
    port: DB_PORT_PG,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
