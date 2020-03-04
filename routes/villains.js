const express = require('express');
const router = express.Router();
const { browse, read } = require('../db/queries');

router.get('/', (req, res) => {
  browse((err, villains) => {
    // res.json(villains);
    if (err) {
      return res.render('error', { err });
    }
    res.render('villains', { villains });
  });
});

router.get('/:id', (req, res) => {
  read(req.params.id, (villain) => {
    console.log(villain);
    res.render('villain', villain);
  });
});

module.exports = router;
