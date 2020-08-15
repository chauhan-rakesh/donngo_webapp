var mongoose = require('mongoose');

var ngoSchema = mongoose.Schema({

	name: String,
  estd:String,
  desc: String,
  field:String,
  country: String,
  state:String,
  city: String,
  pincode:String,
});

module.exports = mongoose.model('ngo',ngoSchema);
