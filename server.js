const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index');
});
app.get('/resume', (req, res) => {
    res.render('resume');
});
app.get('/projects', (req, res) => {
    res.render('projects');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});



app.listen(3000, () => {
    console.log("Server is runing on http://localhost:3000");
})