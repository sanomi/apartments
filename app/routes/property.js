module.exports = function(app, passport) {

  app.post('/property', function(req, res) {
      var property = {
        manager: req.user,
        apartments: [],
        address: req.address,
        name: req.name
      }

  });

}



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()){
    return next()
  }
  res.redirect('/');
}
