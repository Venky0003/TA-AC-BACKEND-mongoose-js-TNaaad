let express = require('express');

let mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/modelarr');

let app = express();

app.get('/', (req, res) => {
  res.send('Hello schema types in mongoose');
});

app.listen(5000, () => {
  console.log('Server Listening on port 5k');
});
