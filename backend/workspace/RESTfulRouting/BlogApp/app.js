var bodyParser = require("body-parser"),
	methodOverride = require("method-override"),
	mongoose = require("mongoose"),
	express = require("express"),
	expressSanitizer = require("express-sanitizer");
	app = express();

// App config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// Mongoose config
var blogSchema = new mongoose.Schema({
	title: String,
	image: {type: String, default: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
	body: String,
	created: {type: Date, default: Date.now}
})
var Blog = mongoose.model("Blog", blogSchema);

// Blog.create({
// 	title: "Test Blog",
// 	body: "This is a test blog"
// });

// Restful Routes
app.get("/", function(req,res){
	res.redirect("/blogs");
})

// Index Route
app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if (err){
			console.log("ERROR!");
		} else{
			res.render("index", {blogs: blogs});
		}
	})
})

// New Route
app.get("/blogs/new", function(req, res){
	res.render("new");
})

// Create Route
app.post("/blogs", function(req, res){
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.create(req.body.blog, function(err, newBlog){
		if (err){
			res.render("new");
		} else {
			res.redirect("/blogs");
		}
	})
})

// Show Route
app.get("/blogs/:id", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if (err){
			res.redirect("/blogs");
		} else {
			res.render("show", {blog: foundBlog});
		}
	})
})

// Edit Route
app.get("/blogs/:id/edit", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if (err) {
			res.redirect("/blogs");
		} else {
			res.render("edit", {blog: foundBlog})
		}
	})
})

// Update Route
app.put("/blogs/:id", function(req, res){
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
		if (err) {
			res.redirect("/blogs");
		} else {
			res.redirect("/blogs/" + req.params.id);
		}
	})
})

// Delete Route
app.delete("/blogs/:id", function(req, res){
	Blog.findByIdAndRemove(req.params.id, function(err){
		if (err) {
			res.redirect("/blogs");
		} else {
			res.redirect("/blogs");
		}
	})
})
app.listen(3000, "127.0.0.1", function(){
	console.log("Server Started!")
})