var express = require('express');  
var app = express();  

var bodyParser = require('body-parser');  

// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

app.use(express.static('public'));  

app.get('/login.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
})  

app.post('/process_post', urlencodedParser, function (req, res) {  

var firstname=req.body.first_name;
var lastname=req.body.last_name;

if(firstname=='object' && lastname=='knowit')
{
res.send('Successful login');
}
else
{
 //res.cookie('name', 'wrong user').send('cookie set'); //Sets name = express
res.sendFile( __dirname + "/" + "login.html" );  
}
   // Prepare output in JSON format  
   response = {  
       first_name:req.body.first_name,  
       last_name:req.body.last_name  
   };  
   console.log(response);  
 //  res.end(JSON.stringify(response));  
})  

var server = app.listen(8000, function () {  
  var host = server.address().address  
  var port = server.address().port  
  console.log("Example app listening at http://%s:%s", host, port)  
})  