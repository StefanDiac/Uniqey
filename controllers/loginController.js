module.exports = function(app, urlencodedParser, bodyParser, Users, UIDs){
  app.get('/', function(req, res){
    res.render('login');
  });

  app.post('/', urlencodedParser, function(req, res){
      var loginDetails = req.body;

      Users.findOne({where: {email: req.body.Email}}).then(function(user){
        if(user){
          console.log('Found them!');
          res.send('Finished boss !');
        }else{
          Users.create(req.body).then(function(user){
            res.send('Created a new user for you boss !');
          });
        }
      })
  });
};
