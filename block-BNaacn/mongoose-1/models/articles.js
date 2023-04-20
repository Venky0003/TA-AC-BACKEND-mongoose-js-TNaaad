let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let articleSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    tags: [Strings],
    createdAt: { type: Date, default: Date.now },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

var Article = mongoose.model('User', articleSchema);

module.exports = Article;
