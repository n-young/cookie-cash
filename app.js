const express = require('express');
const app = express();
const flash = require('express-flash');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const async = require('async');

const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));

//=========================================
//ROUTES
//=========================================

app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.get('/login', (req, res) => {
    res.render("login.ejs");
})

app.get('/app', (req, res) => {
    res.sendFile("client/build/index.html", { root: __dirname + "/public" });
})

//Post request for child login

//Post request for parent login

//Post request for register


//=========================================
//START SERVER
//=========================================

console.log(`App started on port ${port}`);
app.listen(port);
