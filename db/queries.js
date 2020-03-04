const db = require('./db');

const browse = (cb) => {
  db.query('SELECT * FROM movie_villains;')
    .then(data => {
      cb(null, data.rows);
    })
    .catch(err => cb(err));
};

const read = (id, cb) => {
  db.query('SELECT * FROM movie_villains WHERE id = $1;', [id])
    .then(data => {
      console.log(data);
      cb(data.rows[0]);
    });
};

module.exports = { browse, read };
