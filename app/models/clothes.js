var mongoose = require('mongoose');

var clothesSchema = mongoose.Schema({

	email: String,
	user_name: String,
  contactNo:String,
  casual:String,
  formal:String,
	desc: String,
	ngo_id: String,
  quantity:Number,
  usage:String,
    date:String
});

module.exports = mongoose.model('clothes',clothesSchema);
