let express = require('express');
let mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/datatypes');

let app = express();
app.get('/', (req, res) => {
  res.send('Schema types');
});

app.listen(3000, () => {
  console.log('Server Listening on port 3k');
});
