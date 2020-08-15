var mongoose = require('mongoose');

var adminSchema = mongoose.Schema({

	name: String,
  ngo_name:String,
  position:String,
  age:String,
	email: String,
	password: String,
	contactNo: String,

});

module.exports = mongoose.model('admin',adminSchema);
