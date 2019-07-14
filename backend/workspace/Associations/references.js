var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", {useNewUrlParser: true});
var Post = require("./models/post");
var User = require("./models/user");

// User.create({
// 	email: "bob@gmail.com",
// 	name: "Bob Belcher"
// })

// Post.create({
// 	title: "How to cook the best burger",
// 	content: "Just kidding"
// }, function(err, post){
// 	User.findOne({email: "bob@gmail.com"}, function(err, userFound){
// 		if (err){
// 			console.log(err);
// 		} else {
// 			userFound.posts.push(post);
// 			userFound.save(function(err, data){
// 				if (err){
// 					console.log(err);
// 				} else {
// 					console.log(data);
// 				}
// 			});
// 		}
// 	})
// })

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
	if (err){
		console.log(err);
	} else {
		console.log(user);
	}
})