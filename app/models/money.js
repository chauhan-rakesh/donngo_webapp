var mongoose = require('mongoose');

var moneySchema = mongoose.Schema({

	email: String,
	user_name: String,
  contactNo:String,
  amount:String,
  transaction_id:String,
	desc: String,
	ngo_id: String,
  date:String

});

module.exports = mongoose.model('money',moneySchema);
