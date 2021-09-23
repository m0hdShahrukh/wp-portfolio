const { ejson } = require("ejs");
const express = require("express");
const app = express();
const path = require('path')
const uri = process.env.MONGODB_URI;
const router = express.Router();
const fs = require("fs");
const http = require("http")
const bodyParser = require("body-parser")
const { urlencoded } = require("express");
const port = process.env.PORT || 3000;

app.use('/mycss.css', express.static(path.join(__dirname, '/mycss.css')))
app.use('/wp-content', express.static(__dirname + '/wp-content'));
app.use('/wp-includes', express.static(__dirname + '/wp-includes'));
app.use('/wp-json', express.static(__dirname + '/wp-json'));
app.use(express.urlencoded());
app.use(express.json()); 

app.set('view engine', 'ejs') // Set the template engine as ejs
app.set('index', path.join(__dirname, './index.html')) // Set the views directory
app.set('about', path.join(__dirname, '/about./index.html')) // Set the views directory
app.set('projects', path.join(__dirname, '/projects./index.html')) // Set the views directory
app.set('contact', path.join(__dirname, '/contact./index.html')) // Set the views directory
app.set('resume', path.join(__dirname, '/Resume2.pdf')) // Set the views directory
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
// ENDPOINTS
app.get('/', function(req, res) {
    res.sendFile( __dirname + "/index.html" ); 
});
app.get('/about/index.html', function(req, res) {
    res.sendFile( __dirname + "/about/index.html" ); 
});
app.get('/projects/index.html', function(req, res) {
    res.sendFile( __dirname + "/projects/index.html" ); 
});
app.get('/contact/index.html', function(req, res) {
    res.sendFile( __dirname + "/contact/index.html" ); 
});
app.get('/Resume2.pdf', function(req, res) {
    res.sendFile( __dirname + "/Resume2.pdf" ); 
});

// app post
app.post('/contact', (req, res) => {
    if ("") {
        res.sendFile(__dirname + "/views/index.html")
        
    } else {
        res.status(400).sendFile(__dirname + "/views/form.html")
        
    }
     })
app.engine('html', require('ejs').renderFile);
// START THE SERVER
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
