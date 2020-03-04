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
      cb(null, data.rows[0]);
    })
    .catch(err => cb(err));
};

const edit = (id, villain, cb) => {
  const sql = 'UPDATE movie_villains SET villain = $2 WHERE id = $1;';
  const args = [id, villain];
  db.query(sql, args)
    .then(() => {
      cb(null, 'villain updated successfully');
    })
    .catch(err => cb(err));
};

const add = (villain, movie, cb) => {
  const sql = 'INSERT INTO movie_villains(villain, movie) VALUES($1, $2);';
  const args = [villain, movie];
  db.query(sql, args)
    .then(() => {
      cb(null, 'villain created!');
    })
    .catch(err => cb(err));
};

const del = (id, cb) => {
  const sql = 'DELETE FROM movie_villains WHERE id = $1;';
  const args = [id];
  db.query(sql, args)
    .then(() => {
      cb(null, 'villain defeated successfully');
    })
    .catch(err => cb(err));
};

module.exports = { browse, read, edit, add, del };
