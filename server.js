const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const i18n = require("./i18N");

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
// app.use(i18n);

app.get('/', (req, res) => {
    // console.log(res.__('Hello i18n'));
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