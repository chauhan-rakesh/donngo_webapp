
var express = require('express');
var router = express.Router();
var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var Admin = require('../models/admin');
var Ngo = require('../models/ngo');
var Food = require('../models/food');
var Money = require('../models/money');



exports.home = (req,res)=>{
  res.render('admin/dashboard',{
    error : req.flash("error"),
    success: req.flash("success"),
    session:req.session,
    admin:req.user
  });
}

exports.login= (req,res)=>{
  if (res.locals.user) {
  res.redirect('/admin');
}
res.render('admin/auth/signin', {  });
}
exports.register = function(req, res) {

	res.render('admin/auth/signup.ejs', {
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

  res.render('admin/auth/signup',{
    errors: errors
  });
}else{
  Admin.findOne({email:req.body.email,ngo_name:req.body.ngo_name}).then(user=>{
    Ngo.findOne({name:req.body.ngo_name}).then(ngo=>{
      if(!user) {
        var newUser =new Admin({
          name: req.body.name,
          contactNo:req.body.contactNo,
          position:req.body.position,
          ngo_name:req.body.ngo_name,
          age: req.body.age,
          email: req.body.email,
          password: req.body.password

        });
        if(!ngo){
          var newNgo =new Ngo({
            name: req.body.ngo_name
          });

        }

        newUser.save().then(savedEvent =>{
          newNgo.save().then(savedEventNgo=>{
            req.flash('success_msg', 'User Successfully Registered.');
            res.redirect('/admin/login');
          });

        });
      }else{
        req.flash('error_msg','User Already Exists');
        res.redirect('/admin/register');
      }

          });
      });
}
}

passport.use(new LocalStrategy({usernameField: 'email'}, (email,password,done)=>{

    Admin.findOne( {email : email,password: password }).then(user=>{
      console.log(user);

      if(!user) {
        return done(null, false, {message: 'no user found'});
      }else{
        return done(null, user);

      }

      console.log(message);
});

}));
passport.serializeUser(function(user ,done){
User.findOne({email: user.email}, function( err,users ) {
         if ( users ) {
              // user is student
              done( null, user._id );
         } else {
              Admin.findOne( {email: user.email }, function( err, admin ) {
                   if ( admin ) {
                        // user is teacher
                        done( null, user.id );
                   }
              } );
         }
    } );
});
passport.deserializeUser(function(_id, done) {
  Admin.findById(_id, function(err, user){
            if(user){
              done(err, user);
            }else{
              User.findById(_id,function(err, user){
                if(user){
                    done(err, user);
                }

              });
            }

        });
});
//
// passport.serializeUser(function(user, done) {
//       done(null, user.id);
//   });
//
//   passport.deserializeUser(function(id, done) {
//       Admin.findById(id, function(err, user) {
//           done(err, user);
//       });
//   });


exports.post_login = (req,res,next)=>{
  req.flash('error', 'renderinf error');
  passport.authenticate('local',{
    successRedirect: '/admin',
    failureRedirect:'/admin/login',
    failureFlash:true
  })(req,res,next);

}
exports.logout = (req,res)=>{

        req.logout();
        res.redirect('/admin/login')
}
//admin dashboard
//ngo Details

exports.ngoDetails = (req,res)=>{
  Ngo.findOne({name: req.user.ngo_name}).then(ngo=>{
    res.render('admin/ngoDetails',{
      error : req.flash("error"),
      success: req.flash("success"),
      session:req.session,
      admin:req.user,
      ngo:ngo
    });
  });
}

exports.post_ngoDetails = (req,res)=>{

  res.redirect('/');

}
exports.put_ngoDetails = (req,res)=>{
  Ngo.findOne({name:req.user.ngo_name}).then(user=>{

        user.name =  req.body.name;
        user.estd = req.body.estd;
        user.field = req.body.field;
        user.country = req.body.country;
        user.city = req.body.city;
        user.state = req.body.state;
        user.address= req.body.address;
        user.pincode = req.body.pincode;
        console.log(req.body.name);
        user.save(updatedInfo =>{
  res.redirect('/admin/ngo_details');


    });
  });

}

exports.getFoodDonationList = (req,res)=>{

  Ngo.findOne({ _id:req.user._id}).then(node=>{

      Food.find({ ngo_id: req.user._id }).then(food=>{

          res.render('admin/donationFood.ejs',{

            food: food,
            admin:req.user
          });


      })



  })
  

}
exports.getMoneyDonationList = (req,res)=>{

  Ngo.findOne({ _id:req.user._id}).then(node=>{

      Money.find({ ngo_id: req.user._id }).then(food=>{

          res.render('admin/donationMoney.ejs',{

            food: food,
            admin:req.user
          });


      })



  })
  

}
