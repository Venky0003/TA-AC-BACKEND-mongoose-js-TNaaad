let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let addressSchema = new Schema(
  {
    village: { type: String },
    city: { type: String },
    state: { type: String },
    pin: { type: Number },
    user: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Address', addressSchema);
