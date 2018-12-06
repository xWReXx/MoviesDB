// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/MOVIES_CRUD_PROJECT'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  }

};
