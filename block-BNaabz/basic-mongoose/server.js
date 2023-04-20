let express = require('express');

let app = express();
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bsm');

app.get('/', (req, res) => {
  res.send('Welcome to mongoose');
});

app.listen(3000, () => {
  console.log('Server Listening on Port 3k');
});
