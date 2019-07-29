var express = require("express"),
    router  = express.Router(),
    Campground  = require("../models/campground"),
    middleware = require("../middleware");


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

router.post("/", middleware.isLoggedIn, function(req, res){
    var name = req.body.name;
    var price = req.body.price;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newCampground = {name: name, price: price, image: image, description: desc, author: author};
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
router.get("/new", middleware.isLoggedIn,function(req, res){
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

// Edit Route
router.get("/:id/edit", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        res.render("campgrounds/edit", {campground: foundCampground});
    })
})

// Update Route
router.put("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err, updatedCampground){
        if (err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds/" + req.params.id)
        }
    })
})

// Destroy Route
router.delete("/:id", middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
        if (err){
            res.redirect("/campgrounds");
        } else {
            res.redirect("/campgrounds");
        }
    })
})


module.exports = router;