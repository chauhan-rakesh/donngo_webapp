var mongoose = require('mongoose');

var utilitiesSchema = mongoose.Schema({

	email: String,
	user_name: String,
  contactNo:String,
	desc: String,
	ngo_id: String,
  quantity:String,
  date:String

});

module.exports = mongoose.model('utilities',utilitiesSchema);
