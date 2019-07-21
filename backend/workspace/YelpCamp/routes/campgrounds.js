var express = require("express"),
    router  = express.Router(),
    Campground  = require("../models/campground");


// =============================
// CAMPGROUNDS ROUTES
// =============================
router.get("/", function(req, res){
    Campground.find({}, function(err, allCampgrounds){
        if (err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allCampgrounds})
        };
    })
});

router.post("/", isLoggedIn, function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, image: image, description: desc, author: author};
    // campgrounds.push(newCampGround);
    Campground.create(newCampground, function(err, campground){
        if (err){
            console.log(err);
        }
        else {
            console.log(campground);
        }
    });
    res.redirect("/campgrounds")
});

// New Route
router.get("/new", isLoggedIn,function(req, res){
    res.render("campgrounds/new")
})

// Show Route
router.get("/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if (err){
            console.log(err);
        } else {
            console.log(foundCampground);
            res.render("campgrounds/show", {campground: foundCampground});
        }
    })
})

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;