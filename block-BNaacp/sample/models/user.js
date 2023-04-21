let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name:{ type: String},
    email:{type: String, lowercase: true},
    sports:[String]
},{timestamps:true});

let User = mongoose.model("User", userSchema);

module.exports = User;