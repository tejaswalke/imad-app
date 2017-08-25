var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var XTerox={
    'XTej-one': {
               title: 'Introduction to Tej',
               heading: 'Welcome to Tej',
               date: 'Aug 25',
               content:`    
               <p>
                            My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  
                            </p>
                <p>
                            My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  
                            </p>
                <p>
                            My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  
                            </p>`
},
    'XTej-two':{title: 'Introduction to Tej-2',
               heading: 'Welcome to Tej',
               date:'Aug 12',
               content:`    
               <p>
                            My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  
                            </p>
                <p>
                            My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  
                            </p>
                <p>
                            My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  
                            </p>`},
    'XTej-three':{title: 'Introduction to Tej-3',
               heading: 'Welcome to Tej',
               date:'Aug 05',
               content:`    
               <p>
                            My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  
                            </p>
                <p>
                            My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  My name is Tejas Walke and i am frm India , Welcome to my Page ;-)   
                            </p>
                <p>
                            My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  My name is Tejas Walke and i am frm India , Welcome to my Page ;-)  
                            </p>`},     
};             
    function createTemplate (data){
        var title=data.title;
        var heading=data.heading;
        var date=data.date;
        var content=data.content;
    
    var htmltemplate=
        `<html>
        <head>
            <title>
                Information-Tej -2
            </title>
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        <body>
          <div class="container">
            <div>
            <a href='/'>home</a>
            </div>
           <hr/>
       
                    
            
                <h3>
                ${heading}
                </h3>
                <div>
                ${date}
                </div>
                ${content}
                </div>       
        </body>
        </html>
        
    `;
    return htmltemplate
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:XTejName', function(req, res) {
    //XTejName==XTej-one
    //XTerox=[XTejName]=={} content object for XTej-one
    var XTejName = req.params.XTejName;
  res.sendFile(path.join(__dirname, 'ui', 'XTej-one.html'));
});

app.get('/XTej-two', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'XTej-two.html'));
});

app.get('/XTej-three', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'XTej-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
