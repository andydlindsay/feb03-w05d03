const pg = require('pg');
const Client = pg.Client;
// const { Client } = pg;

const options = {
  host: 'drona.db.elephantsql.com',
  database: 'tytgrqcs',
  user: 'tytgrqcs',
  password: 'EaLMYgZV4nHIZIVTmZU-PQ6pabuqgiz_'
};

const client = new Client(options);
let sql = '';
let args = [];
let id = 0;

const verb = process.argv.slice(2)[0].toLowerCase();

client.connect(() => {
  console.log('successfully connected to db');

  switch(verb) {
    case 'browse':
      client.query('SELECT * FROM movie_villains;')
        .then(data => {
          console.log(data.rows);
          client.end();
        });
      break;

    case 'read':
      id = process.argv.slice(2)[1];
      sql = 'SELECT * FROM movie_villains WHERE villain = $1;';
      args = [id];
      client.query(sql, args)
        .then(data => {
          console.log(data.rows);
          client.end();
        });
      break;

    case 'edit':
      id = process.argv.slice(2)[1];
      const villain = process.argv.slice(2)[2];
      // const [id, villain] = process.argv.slice(2);
      sql = 'UPDATE movie_villains SET villain = $2 WHERE id = $1;';
      args = [id, villain];
      client.query(sql, args)
        .then(() => {
          console.log('villain updated successfully');
          client.end();
        });
      break;

    case 'add':
      const newVillain = process.argv.slice(2)[1];
      const newMovie = process.argv.slice(2)[2];
      sql = 'INSERT INTO movie_villains(villain, movie) VALUES($1, $2);';
      args = [newVillain, newMovie];
      client.query(sql, args)
        .then(() => {
          console.log('villain inserted!');
          client.end();
        });
      break;
      
    case 'delete':
      id = process.argv.slice(2)[1];
      sql = 'DELETE FROM movie_villains WHERE id = $1;';
      args = [id];
      client.query(sql, args)
        .then(() => {
          console.log('villain defeated successfully');
          client.end();
        });
      break;
  }
});
