var express = require("express")
var app = express()

app.get("/", function(req, res) {
    res.send("Welcome to my website!")
})

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof!",
        cat: "I have you human",
        goldfish: "..."
    }
    res.send("The animal says " + sounds[animal])
})

app.get("/:message/:number", function(req, res){
    var message = req.params.message;
    var number = Number(req.params.number);
    var result = "";
    for (var i = 1; i <= number; i++){
        result += message + " ";
    }
    res.send(result);
})

app.get("*", function(req, res) {
    res.send("Sorry, page not found.")
})

// Listen for request
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!")
});