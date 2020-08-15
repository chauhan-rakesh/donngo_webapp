
var express = require('express');
var router = express.Router();
var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
exports.login= (req,res)=>{
  if (res.locals.user) {
  res.redirect('/');
}
res.render('auth/signin', {  });
}
exports.register = function(req, res) {

	res.render('auth/signup.ejs', {
		error : req.flash("error"),
		success: req.flash("success"),
		session:req.session,

	 });

}
exports.post_register = function(req, res) {


  let errors = [];
var a="",b="",c="",d="",e="";
var err = true;
if(!req.body.name){
  a="Name, ";
  err = false;
  // errors.push({text:'Name missing'});
}
if(!req.body.age){
  b="Age, ";
  err=true;
  // errors.push({text:'Age missing'});
}if(!req.body.email){
  c="Email,";err=true;
  // errors.push({text:' Email Missing'});
}if(!req.body.ContactNo){
  d="Contact No, ";err=true;
  // errors.push({text:' Conatct No Missing'});
}
if(!req.body.password){
  e="Password, ";err=true;
  // errors.push({text:'Password missing'});
  if(err){
  errors.push({text:a+b+c+d+e+"Missing!"})
  }
}if(!(req.body.password === req.body.password2)){
  errors.push({text:'Password not match'});
}

console.log(errors);

if(errors.length > 0 ){

  res.render('auth/signup',{
    errors: errors
  });
}else{
  User.findOne({email:req.body.email.toLowerCase()}).then(user=>{

        if(!user) {
          var newUser =new User({
            name: req.body.name,
            contactNo:req.body.contactNo,
            age: req.body.age,
            email: req.body.email,
            password: req.body.password

          });

          newUser.save().then(savedEvent =>{
            req.flash('success_msg', 'User Successfully Registered.');
            res.redirect('/login');
          });
        }else{
          req.flash('error_msg','User Already Exists');
          res.redirect('/register');
        }

      });

}
}

passport.use(new LocalStrategy({usernameField: 'email'}, (email,password,done)=>{

    User.findOne( {email : email,password: password }).then(user=>{
      console.log(user);

      if(!user) {
        return done(null, false, {message: 'no user found'});
      }else{
        return done(null, user);

      }

      console.log(message);
});

}));
//
// passport.serializeUser(function(user, done) {
//       done(null, user.id);
//   });
//
//   passport.deserializeUser(function(id, done) {
//       User.findById(id, function(err, user) {
//           done(err, user);
//       });
//   });


exports.post_login = (req,res,next)=>{
  req.flash('error', 'renderinf error');
  passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect:'/login?error=1',
    failureFlash:true
  })(req,res,next);

}
exports.logout = (req,res)=>{

        req.logout();
        res.redirect('/login')
}
