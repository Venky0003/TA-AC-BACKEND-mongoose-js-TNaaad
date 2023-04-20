let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String },
    favourites: [Strings],
    marks: [Number],
    password: { type: String, minlength: 5, maxlength: 15 },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
