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
  app.get('hotel',function(req,res){
      res.render('hotel',{hotel:data});
  });
  app.get('/hotelAdmin', isAuthenticated ,function(req,res){
      res.render('hotelAdmin',{home:data});
  });
  app.post('/hotelAdmin', urlencodedparser , function(req,res){
 data.push(req.body);
   res.json(data);
  });
  app.delete('/hotelAdmin/:name',function(req,res){
  data.pop(req.params.name);
      res.json(data);
  });
};
