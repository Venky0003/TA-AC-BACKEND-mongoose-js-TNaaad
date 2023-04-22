let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let articleSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    tags: [String],
    likes: {
      type: Number,
      default: 0,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true }
);

let Article = mongoose.model('Article', articleSchema);

let commentSchema = new Schema(
  {
    content: { type: String, required: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    article: {
      type: Schema.Types.ObjectId,
      ref: 'Article',
      required: true,
    },
  },
  { timestamps: true }
);

let Comment = mongoose.model('Comment', commentSchema);

let UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    age: {
      type: Number,
      default: 0,
    },
    articles: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Article',
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true }
);
let User = mongoose.model('User', UserSchema);

module.exports = { Article, Comment, User };
