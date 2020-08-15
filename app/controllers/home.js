
exports.home = function(req, res) {


	res.render('user/Dashboard/dashboard.ejs', {
		error : req.flash("error"),
		success: req.flash("success"),
		session:req.session,
		user:req.user

	 });

}
exports.video = (req,res)=>{
	res.render('index', {
		error : req.flash("error"),
		success: req.flash("success"),
		session:req.session,
		user:req.user

	 });
}
