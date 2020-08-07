// dependencies
const express = require('express');
const app = express();

// const Product = require('../models/product.js');
// const User = require('../models/user.js');
const port = 3000;

// middleware
app.use(express.urlencoded({extended: true}), express.static(__dirname + '/public'));

// routes
app.get("/", (req,res) => {
    res.render('index.ejs');
});

app.get("/about", (req,res) => {
    res.render('about.ejs');
});

app.get("/contact", (req,res) => {
    res.render('contact.ejs');
});

app.listen(port, () => {
    console.log("listening");
});