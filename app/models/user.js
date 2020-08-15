var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

	name: String,
	email: String,
	password: String,
	contactNo: String,
	age: String,
  role_id:{type:String,default:2}
});

module.exports = mongoose.model('user',userSchema);
