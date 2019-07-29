var express     = require("express"),
    router      = express.Router(),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    User        = require("../models/user");

router.get("/", function(req, res){
    res.render("landing");
});


// =============================
// AUTHENTICATION ROUTES
// =============================
router.get("/register", function(req, res){
    res.render("register");
})

router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username})
    User.register(newUser, req.body.password, function(err, user){
        if (err){
            req.flash("error", err.message);
            res.redirect("register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to YelpCamp" + user.username);
            res.redirect("/campgrounds");
        })
    })
})

router.get("/login", function(req, res){
    res.render("login");
})

// Middleware
// app.post("/login", middleware, callback)
router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
    }), function(req, res){
})

router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Logged you out!");
    res.redirect("/campgrounds");
})

module.exports = router;