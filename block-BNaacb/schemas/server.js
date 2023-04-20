let express = require('express');

let mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/smodels');

let app = express();

app.get('/', (req, res) => {
  res.send('Hello mongoose.js');
});

app.listen(4000, () => {
  console.log('Server listening on port 4k');
});
