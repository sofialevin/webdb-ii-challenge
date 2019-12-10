module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    },
    migrations: {
      directory: './data/migrations'
    },
    useNullAsDefault: true
  }
};
