var express = require('express')
var homeController = require('./controller/homeController')
var detailsController = require('./controller/detailsController')
  var admin = require('firebase-admin')
  var serviceAccount = require("./graduation-1f4f6-firebase-adminsdk-wte0p-2c8ce29cf3.json")
  var path = require('path')
  const http = require('http')
  const socket = require('socket.io')
  const port = process.env.PORT || 3000
var app = express()
var server = http.createServer(app);
var io = socket(server);

io.on('connection',function(socket){
  console.log('new user',socket.id);
socket.on('chat', function(data){
       io.sockets.emit('chat', data);
});
});
app.use('/asset',express.static("asset"));
app.set('view engine', 'ejs');
homeController(app);
detailsController(app);


app.get('/FEE', function (req, res) {
  res.render('FEE')
})
app.get('/logIn', function (req, res) {
  res.render('logIn')
})
app.get('/house', function (req, res) {
  res.render('house')
})
app.get('/contact', function (req, res) {
  res.render('contact')
})
app.get('/resturant', function (req, res) {
  res.render('resturant')
})
app.get('/homeAdmin', function (req, res) {
  res.render('homeAdmin')
})
app.get('/electronicsAdmin', function (req, res) {
  res.render('electronicsAdmin')
})

app.get('/hotelAdmin', function (req, res) {
  res.render('hotelAdmin')
})
app.get('/FEEAdmin', function (req, res) {
  res.render('FEEAdmin')
})
app.get('/medicalAdmin', function (req, res) {
  res.render('medicalAdmin')
})
app.get('/resturantAdmin', function (req, res) {

  res.render('resturantAdmin')
})
app.get('/about', function (req, res) {
  res.render('about')
})
app.get('/hotel', function (req, res) {
  res.render('hotel')
})

app.get('/admin', function isAuthenticated(req,res,next){

  res.render('admin')
  next()
})
app.get('/medical', function (req, res) {
  res.render('medical')
})
app.get('/shoping', function (req, res) {
  res.render('shoping')
})
app.get('/shopingAdmin', function (req, res) {
  res.render('shopingAdmin')
})
app.get('/electronics', function (req, res) {
  res.render('electronics')
})
app.get('/logInAdmin', function (req, res) {
  res.render('logInAdmin')
})



server.listen(port)
console.log(`listining to ${port}`)
