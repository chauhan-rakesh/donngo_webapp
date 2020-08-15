var home = require('../app/controllers/home');
var auth = require('../app/controllers/auth');
var {userAuthenticated} = require('./authenticated');
var {adminAuthenticated} = require('./authenticated');
var user = require('../app/controllers/user');
var admin = require('../app/controllers/admin');
//you can include all your controllers

module.exports = function (app, passport) {

    app.get('/',userAuthenticated,home.home);
    app.get('/login',auth.login);//home
    app.get('/register',auth.register);
    app.post('/register',auth.post_register);
    app.post('/login',auth.post_login);
    app.get('/logout',auth.logout);
    app.get('/video',home.video);

    app.get('/profile',userAuthenticated,user.profile);
    app.get('/update',userAuthenticated,user.update);
    app.put('/update',userAuthenticated,user.put_update);

    //ngo admin urls
    app.get('/admin',adminAuthenticated,admin.home);
    app.get('/admin/login',admin.login);//home
    app.get('/admin/register',admin.register);
    app.post('/admin/register',admin.post_register);
    app.post('/admin/login',admin.post_login);
    app.get('/admin/logout',admin.logout);
    app.get('/success',userAuthenticated,user.success);

    //user Dashboard
    app.get('/ngo_list',userAuthenticated,user.ngo_list);
    app.get('/food',userAuthenticated,user.food);
      app.get('/money',userAuthenticated,user.money);
        app.get('/book',userAuthenticated,user.book);
          app.get('/med',userAuthenticated,user.med);
            app.get('/utilities',userAuthenticated,user.utilities);
              app.get('/clothes',userAuthenticated,user.clothes);
        app.post('/food',userAuthenticated,user.post_food);
          app.post('/money',userAuthenticated,user.post_money);
            app.post('/book',userAuthenticated,user.post_book);
              app.post('/med',userAuthenticated,user.post_med);
                app.post('/utilities',userAuthenticated,user.post_utilities);
                  app.post('/clothes',userAuthenticated,user.post_clothes);
        app.get('/donations_transaction',userAuthenticated,user.donationList);


    //admin Dashboard
    app.get('/admin/ngo_details',adminAuthenticated,admin.ngoDetails);
    app.post('/admin/ngo_details',adminAuthenticated,admin.post_ngoDetails);
    app.put('/admin/ngo_details',adminAuthenticated,admin.put_ngoDetails);
    app.get('/admin/food',adminAuthenticated,admin.getFoodDonationList);
    app.get('/admin/money',adminAuthenticated,admin.getMoneyDonationList);



}
