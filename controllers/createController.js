module.exports = function(app, urlencodedParser, bodyParser, Users, UIDs){

  app.get('/home',function(req,res){
    var loginName = req.body;
    console.log(req.body);
    res.render('index', {name: loginName});
    });
};
