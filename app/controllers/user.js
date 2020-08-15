var User = require('../models/user');
var Ngo = require('../models/ngo');
var Book = require('../models/book');
var Money = require('../models/money');
var Clothes = require('../models/clothes');
var Food = require('../models/food');
var Med = require('../models/medicine');
var Utilities = require('../models/utilities');

exports.profile= (req,res)=>{
res.render('user/Dashboard/profile', {user:req.user  });
}
exports.update= (req,res)=>{
res.render('user/Dashboard/update', {user:req.user  });
}
exports.put_update = (req,res)=>{
  User.findOne({_id: req.user._id}).then(user =>{
      user.name =  req.body.name;
      user.age = req.body.age;
      user.contactNo = req.body.contactNo;
      user.email = req.body.email;

      console.log(   req.body.name);
      user.save(updatedInfo =>{
res.redirect('/profile');

      });
  });
}
exports.ngo_list = (req,res)=>{
  Ngo.find({}).then(ngo=>{
    res.render('user/Dashboard/ngoList', {
      user:req.user,
      ngo:ngo
    });
  });
}
exports.food = (req,res)=>{
  Ngo.find({}).then(ngo=>{
    res.render('user/Dashboard/food', {
      user:req.user,
      ngo:ngo
    });
  });

}
exports.post_food = (req,res)=>{
  User.findOne({email:req.user.email}).then(user=>{
    Food.findOne({}).then(user=>{

          var newUser =new Food({
            email:req.user.email,
            user_name: req.body.name,
            contactNo:req.body.contactNo,
            food_type:req.body.food_type,
            desc:req.body.desc,
            quantity: req.body.quantity,
            ngo_id: req.body.ngo_id,
            date: Date()

          });


          newUser.save().then(savedEvent =>{

              req.flash('success_msg', 'User Successfully Registered.');
              res.redirect('/Success');


          });


            });
        });


}
exports.book = (req,res)=>{
  Ngo.find({}).then(ngo=>{
    res.render('user/Dashboard/book', {
      user:req.user,
      ngo:ngo
    });
  });

}
exports.post_book = (req,res)=>{
  User.findOne({email:req.user.email}).then(user=>{
    Book.findOne({}).then(user=>{

          var newUser =new Book({
            email:req.user.email,
            user_name: req.body.name,
            contactNo:req.body.contactNo,
            course_book:req.body.course_book,
            desc:req.body.desc,
            quantity: req.body.quantity,
            ngo_id: req.body.ngo_id,
            date: Date()

          });


          newUser.save().then(savedEvent =>{

              req.flash('success_msg', 'User Successfully Registered.');
              res.redirect('/Success');


          });


            });
        });


}
exports.money = (req,res)=>{
  Ngo.find({}).then(ngo=>{
    res.render('user/Dashboard/money', {
      user:req.user,
      ngo:ngo
    });
  });

}
exports.post_money = (req,res)=>{
  User.findOne({email:req.user.email}).then(user=>{
    Money.findOne({}).then(user=>{

          var newUser =new Money({
            email:req.user.email,
            user_name: req.body.name,
            contactNo:req.body.contactNo,
            amount:req.body.amount,
            desc:req.body.desc,
            quantity: req.body.quantity,
            ngo_id: req.body.ngo_id,
            date: Date()

          });


          newUser.save().then(savedEvent =>{

              req.flash('success_msg', 'User Successfully Registered.');
              res.redirect('/Success');


          });


            });
        });


}
exports.clothes = (req,res)=>{
  Ngo.find({}).then(ngo=>{
    res.render('user/Dashboard/clothes', {
      user:req.user,
      ngo:ngo
    });
  });

}
exports.post_clothes = (req,res)=>{
  User.findOne({email:req.user.email}).then(user=>{
    Clothes.findOne({}).then(user=>{

          var newUser =new Clothes({
            email:req.user.email,
            user_name: req.body.name,
            contactNo:req.body.contactNo,
            casual:req.body.food_type,
            desc:req.body.desc,
            quantity: req.body.quantity,
            ngo_id: req.body.ngo_id,
            date: Date()

          });


          newUser.save().then(savedEvent =>{

              req.flash('success_msg', 'User Successfully Registered.');
              res.redirect('/Success');


          });


            });
        });


}
exports.utilities = (req,res)=>{
  Ngo.find({}).then(ngo=>{
    res.render('user/Dashboard/utilities', {
      user:req.user,
      ngo:ngo
    });
  });

}
exports.post_utilities = (req,res)=>{
  User.findOne({email:req.user.email}).then(user=>{
    Utilities.findOne({}).then(user=>{

          var newUser =new Utilities({
            email:req.user.email,
            user_name: req.body.name,
            contactNo:req.body.contactNo,
            desc:req.body.desc,
            quantity: req.body.quantity,
            ngo_id: req.body.ngo_id,
            date: Date()

          });


          newUser.save().then(savedEvent =>{

              req.flash('success_msg', 'User Successfully Registered.');
              res.redirect('/Success');


          });


            });
        });


}
exports.med = (req,res)=>{
  Ngo.find({}).then(ngo=>{
    res.render('user/Dashboard/medicine', {
      user:req.user,
      ngo:ngo
    });
  });

}
exports.post_med = (req,res)=>{
  User.findOne({email:req.user.email}).then(user=>{
    Med.findOne({}).then(user=>{

          var newUser =new Med({
            email:req.user.email,
            user_name: req.body.name,
            contactNo:req.body.contactNo,
            food_type:req.body.food_type,
            desc:req.body.desc,
            quantity: req.body.quantity,
            ngo_id: req.body.ngo_id,
            date: Date()

          });


          newUser.save().then(savedEvent =>{

              req.flash('success_msg', 'User Successfully Registered.');
              res.redirect('/Success');


          });


            });
        });


}
exports.success = (req,res)=>{
  Ngo.find({}).then(ngo=>{
    res.render('user/Dashboard/success', {
      user:req.user,
      ngo:ngo
    });
  });

}
exports.donationList = (req,res)=>{
  Food.find({email:req.user.email}).then(food=>{
    Money.find({email:req.user.email}).then(money=>{
      Book.find({email:req.user.email}).then(book=>{
        Med.find({email:req.user.email}).then(med=>{
          Clothes.find({email:req.user.email}).then(clothes=>{
            Utilities.find({email:req.user.email}).then(utilities=>{
              Ngo.find({_id:money[0].ngo_id}).then(ngo=>{
                res.render('user/Dashboard/donationlist', {
                  user:req.user,
                  ngo:ngo,
                  food:food,
                  book:book,
                  med:med,
                  money:money,
                  clothes:clothes,
                  utilities:utilities
                });
              });
              })
            });
          });
        });
      });

    });




}
