
module.exports = function(app){
app.get('/details/:id', function (req, res) {
  res.render('details', {qs: req.params.id})
 var qs = req.params.id
})
app.get('/shoppingD/:id', function (req, res) {
  res.render('shoppingD', {qs: req.params.id})
 var qs = req.params.id
})
app.get('/medicalD/:id', function (req, res) {
  res.render('medicalD', {qs: req.params.id})
 var qs = req.params.id
})
app.get('/hotelD/:id', function (req, res) {
  res.render('hotelD', {qs: req.params.id})
 var qs = req.params.id
})
app.get('/electronicD/:id', function (req, res) {
  res.render('electronicD', {qs: req.params.id})
 var qs = req.params.id
})



}
