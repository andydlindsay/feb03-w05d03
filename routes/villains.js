const express = require('express');
const router = express.Router();
const { browse, read, edit, add, del } = require('../db/queries');

router.get('/', (req, res) => {
  browse((err, villains) => {
    if (err) {
      return res.render('error', { err });
    }
    res.render('villains', { villains });
  });
});

router.get('/new', (req, res) => {
  res.render('new-villain');
});

router.get('/:id', (req, res) => {
  read(req.params.id, (err, villain) => {
    if (err) {
      return res.render('error', { err });
    }
    res.render('villain', villain);
  });
});

router.post('/:id', (req, res) => {
  edit(req.params.id, req.body.villain, (err) => {
    if (err) {
      return res.render('error', { err });
    }
    res.redirect(`/villains/${req.params.id}`);
  });
});

router.post('/', (req, res) => {
  const { villain, movie } = req.body;
  add(villain, movie, (err) => {
    if (err) {
      return res.render('error', { err });
    }
    res.redirect('/villains');
  });
});

router.post('/:id/delete', (req, res) => {
  del(req.params.id, (err) => {
    if (err) {
      return res.render('error', { err });
    }
    res.redirect('/villains');
  });
});

module.exports = router;
