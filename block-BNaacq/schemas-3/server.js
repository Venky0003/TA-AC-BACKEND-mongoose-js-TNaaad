let express = require('express');
let mongoose = require('mongoose');
let { Article, Comment, User } = require('./models/article');

mongoose.connect('mongodb://0.0.0.0:27017/samples');

let app = express();

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to mongoose');
});

app.post('/user', (req, res) => {
  User.create(req.body)
    .then((result) => {
      res.send({
        cl: result,
        msg: 'added user successfully',
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({
        cl: 'error',
        msg: 'Failed adding user',
      });
    });
});
app.post('/article', (req, res) => {
  Article.create(req.body)
    .then((result) => {
      res.send({
        cl: result,
        msg: 'added article successfully',
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({
        cl: 'error',
        msg: 'Failed adding artcile',
      });
    });
});

app.post('/comment', (req, res) => {
  Comment.create(req.body)
    .then((result) => {
      res.send({
        cl: result,
        msg: 'added comments successfully',
      });
    })
    .catch((err) => {
      console.log(err);
      res.send({
        cl: 'error',
        msg: 'Failed adding comments',
      });
    });
});



app.listen(5000, () => {
  console.log('Server Listening on Port 5k');
});
