const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const villainRouter = require('./routes/villains');

const app = express();
const port = process.env.PORT || 6543;

// middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

// view engine
app.set('view engine', 'ejs');

// routes
app.use('/villains', villainRouter);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
