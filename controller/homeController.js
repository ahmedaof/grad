var bodyparser = require('body-parser');
var data = [{information : 'bla'}]
var urlencodedparser = bodyparser.urlencoded({extended:false});
var admin = require('firebase-admin')
var serviceAccount = require("../graduation-1f4f6-firebase-adminsdk-wte0p-2c8ce29cf3.json");
var firebaseAdmin = admin.initializeApp({
  credential : admin.credential.cert(serviceAccount),
   databaseURL: "https://graduation-1f4f6.firebaseio.com"
})
//auth middleware
function isAuthenticated(req,res,next){
next()
}
module.exports = function(app){
  app.get('/',function(req,res){
      res.render('home',{home:data});
  });
  app.get('/homeAdmin', isAuthenticated ,function(req,res){
      res.render('homeAdmin',{home:data});
  });
  app.post('/homeAdmin', urlencodedparser , function(req,res){
 data.push(req.body);
   res.json(data);
  });
  app.delete('/homeAdmin/:information',function(req,res){
  data.pop(req.params.information);
      res.json(data);
  });
};
