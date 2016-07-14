require('dotenv').config({silent: true});

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/pokemon_db'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
