module.exports = {

    userAuthenticated : function(req,res, next ){

        if(req.isAuthenticated()){
        return  next();
        }
      res.redirect('/login');
    },
    adminAuthenticated : function(req,res, next ){

        if(req.isAuthenticated()){
        return  next();
        }
      res.redirect('/admin/login');
    }

// adminAuthenticated: function(req,res, next){
//         res.redirect('/auth/authselector');
// }
  }
