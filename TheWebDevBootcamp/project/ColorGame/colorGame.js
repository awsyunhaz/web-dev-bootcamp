var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1Display = document.querySelector("h1")
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init()

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			numSquares = this.textContent==="Easy"? 3: 6;
			reset();
		})
	}
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickColor = this.style.backgroundColor
			if (clickColor === pickedColor){
				messageDisplay.textContent = "Correct!"
				resetButton.textContent = "Play Again";
				changeColors(pickedColor);
				h1Display.style.backgroundColor = pickedColor;
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!"
			}
		})
	}
}

function reset(){
	colors = generateColorsArray(numSquares);
	console.log(colors);
	for (var i = 0; i < squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		else{
			squares[i].style.display = "none";
		}
	}
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1Display.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}

resetButton.addEventListener("click", function(){
	reset();
})


function changeColors(color){
	for (var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length)
	return colors[random]
}

function generateColorsArray(num){
	var arr = [];
	for (var i = 0; i < num; i++){
		arr.push(randomColors());
	}
	return arr;
}

function randomColors(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}