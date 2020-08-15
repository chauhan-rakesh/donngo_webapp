var mongoose = require('mongoose');

var foodSchema = mongoose.Schema({

	email: String,
	user_name: String,
  contactNo:String,
  food_type:String,
	desc: String,
	ngo_id: String,
  quantity:Number,
  usage:String,
    date:String
});

module.exports = mongoose.model('food',foodSchema);
