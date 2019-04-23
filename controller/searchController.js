var bodyparser = require('body-parser');
var urlencodedparser = bodyparser.urlencoded({extended:false});
module.exports = function(app){
  app.get('/search',function(req,res){
      res.render('search',{search:data});
  });
  app.get('/search',function(req,res){
      res.render('search',{search:data});
  });
  app.post('/homeAdmin', urlencodedparser , function(req,res){
    res.render('search',{search:data});
  });
