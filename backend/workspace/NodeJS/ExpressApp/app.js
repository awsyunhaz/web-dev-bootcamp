var express = require("express");
var app = express();

app.get('/', function(req, res){
    res.send("Hi there!");
})

app.get('/bye', function(req, res){
    res.send("Goodbye!");
})

app.get('/console', function(req, res){
    console.log("Someone visit console!")
})

app.get("/r/:category", function(req, res) {
    var category = req.params.category;
    res.send("Welcome to the " + category.toUpperCase() + " Category!")
})

// Listen for request
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!")
});