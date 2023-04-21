let express = require('express');
let mongoose = require('mongoose');
let User = require('./models/user');

mongoose.connect('mongodb://0.0.0.0:27017/sample');

let app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to mongoose');
});

app.post('/users', (req, res) => {
  console.log(req.body);
  User.create(req.body)
    .then((result) => {
      res.send({
        kq: result,
        msg: 'Added successfully',
      });
    })
    .catch((err) => {
      res.send({
        kq: 0,
        msg: 'failed',
      });
      console.error(err);
    });
  // send res
});

app.get('/users', (req, res) => {
  User.find({}).then((result) => {
    res.json({ Users: result });
  });
});

app.get('/users/:id', (req, res) => {
  let id = req.params.id;

  User.findById(id).then((result) => {
    res.send(res.json(result));
  });
});

app.get('/user', (req, res) => {
  User.find({ name: 'Raj' }).then((result) => {
    res.json(result);
  });
});

app.put('/users/:id', (req, res) => {
  let id = req.params.id;
  let update = req.body;

  User.findByIdAndUpdate(id, update, { new: true })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.send({ msg: 'failed' });
    });
});

app.put('/user', (req, res) => {
  let id = req.params.id;
  let update = req.body;

  User.updateOne({ name: 'Venkat' }, update, { new: true })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.send({ msg: 'failed' });
    });
});

app.delete('/users/:id', (req, res) => {
  let id = req.params.id;
  let dlt = req.body;
  User.findByIdAndDelete(id, dlt)
    .then((result) => {
      res.send(`${result.title} was deleted`);
    })
    .catch((err) => {
      console.log(err);
      res.send('Unable to delete ');
    });
});

app.listen(5000, () => {
  console.log('Server Listening on Port 5k');
});
