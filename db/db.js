const pg = require('pg');
const Client = pg.Client;

const options = {
  host: 'drona.db.elephantsql.com',
  database: 'tytgrqcs',
  user: 'tytgrqcs',
  password: 'EaLMYgZV4nHIZIVTmZU-PQ6pabuqgiz_'
};

const client = new Client(options);

client.connect();

module.exports = client;
