let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, lowercase: true },
    age: { type: Number, default:0 },
    password:{type: String, minlength:5},
    createdAt:{type:Date, default: Date.now()}
  },
  { timestamps: true }
);

var User = mongoose.model('User', userSchema);

module.exports = User;
