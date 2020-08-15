var mongoose = require('mongoose');

var medSchema = mongoose.Schema({

	email: String,
	user_name: String,
  contactNo:String,
  expiry:String,
	desc: String,
	ngo_id: String,
  quantity:Number,
  usage:String,
    date:String
});

module.exports = mongoose.model('med',medSchema);
