const express = require('express');
const app = express();
const villainRouter = require('./routes/villains');

const port = process.env.PORT || 6543;

app.use('/villains', villainRouter);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
