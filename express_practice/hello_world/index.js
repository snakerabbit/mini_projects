var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var upload = multer();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');


app.set('view engine', 'pug');
app.set('views', './views');


// app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// when extended = false, only accepts strings or arrays
// when extended = true, accepts all types
app.use(upload.array());
app.use(express.static('public'));



//routes
app.get('/', function(req, res){
  res.render('form');
});

app.post('/', function(req, res){
  console.log(req.body);
  res.send("received your request!");
});

var personSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});
var Person = mongoose.model("Person", personSchema);

app.get('/person', function(req, res){
  res.render('person');
});

app.post('/person', function(req, res){
   var personInfo = req.body; //Get the parsed information
   if(!personInfo.name || !personInfo.age || !personInfo.nationality){
      res.render('show_message', {
         message: "Sorry, you provided worng info", type: "error"});
   } else {
      var newPerson = new Person({
         name: personInfo.name,
         age: personInfo.age,
         nationality: personInfo.nationality
      });

      newPerson.save(function(err, Person){
         if(err)
            {res.render('show_message', {message: "Database error", type: "error"});}
         else
          {  res.render('show_message', {
               message: "New person added", type: "success", person: personInfo});}
      });
   }
});

// app.get('/first_template', function(req,res){
//   res.render('first_view');
// });
//
// app.get('/dynamic_view', function(req, res){
//    res.render('dynamic', {
//      name: "TutorialsPoint",
//      url: "http://www.tutorialspoint.com"
//    });
// });

// app.get('/static_file_test', function(req, res){
//   res.render('static_file_test');
// });
// app.get('/:id([0-9]{3})', function(req, res){
//   res.send('The id you specified is ' + req.params.id);
// });

app.get('*', function(req, res){
   res.send('Sorry, this is an invalid URL.');
});

app.listen(3000);
