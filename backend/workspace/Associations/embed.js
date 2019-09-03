var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", {useNewUrlParser: true});

var postSchema = new mongoose.Schema({
	title: String,
	content: String
})
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
})

var User = mongoose.model("User", userSchema);
var Post = mongoose.model("Post", postSchema);

// var newUser = new User({
// 	email: "charlie@brown.edu",
// 	name: "Chalie Brown"
// })
// newUser.posts.push({
// 	title: "How to bre polyjuice potion",
// 	content: "Just kidding"
// })

// newUser.save(function(err, user){
// 	if (err){
// 		console.log(err)
// 	} else{
// 		console.log(user)
// 	}
// });

// var newPost = new Post({
// 	title: "Reflections on Apples",
// 	name: "They are great"
// })
// newPost.save(function(err, user){
// 	if (err){
// 		console.log(err)
// 	} else{
// 		console.log(user)
// 	}
// });

User.findOne({name: "Chalie Brown"}, function(err, user){
	if (err){
		console.log(err);
	} else {
		user.posts.push({
			title: "3 Things I like",
			content: "ZJB. GZQ. ZYH"
		})
		user.save(function(err, user){
			if (err){
				console.log(err);
			} else{
				console.log(user);
			}
		})
	}
})