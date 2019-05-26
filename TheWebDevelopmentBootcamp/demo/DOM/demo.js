var h1 = document.querySelector("h1")
h1.style.color = "pink";

var p = document.querySelector("p")
p.classList.toggle("big")

var ul = document.querySelector("ul");
console.log(ul.textContent)
console.log(ul.innerHTML)

var a = document.querySelector("a");
a.textContent = "Link to Baidu"
a.setAttribute("href", "https://www.baidu.com")

var h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
	h1.style.color = "blue"
})

var lis = document.getElementsByTagName("li");
for (var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		this.style.color = "pink"
	});
}