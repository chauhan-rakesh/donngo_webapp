var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({

	email: String,
	user_name: String,
  contactNo:String,
  course_book:String,
  genral_book:String,
	desc: String,
	ngo_id: String,
  quantity:Number,
  usage:String,
    date:String
});

module.exports = mongoose.model('book',bookSchema);
