let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: String,
    favourites: [Strings],
    marks: [Number],
  },
  { timestamps: true }
);

let addressSchema = new Schema({
  village: String,
  city: String,
  state: String,
  pin: number,
  user: Schema.Types.ObjectId,
});
