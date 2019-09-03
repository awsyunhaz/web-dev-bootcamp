var bt = document.querySelector("button");
// var isPurple = false;
// bt.addEventListener("click", function(){
// 	if (isPurple == false)
// 		document.body.style.background = "purple";
// 	else
// 		document.body.style.background = "white";
// 	isPurple = !isPurple;
// })

bt.addEventListener("click", function(){
	document.body.classList.toggle("purple");
})