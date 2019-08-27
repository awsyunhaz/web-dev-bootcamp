var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var playTo = document.querySelector("input");
var playToDisplay = document.querySelector("p span");

var maxRound = 5;
var p1Score = 0;
var p2Score = 0;
var finished = false;

playTo.addEventListener("change", function(){
	maxRound = Number(playTo.value);
	playToDisplay.textContent = maxRound;
	reset();
})

p1.addEventListener("click", function(){
	if (!finished){
		p1Score ++;
		p1Display.textContent = p1Score;
	}
	if (p1Score===maxRound){
		finished = true;
		p1Display.classList.add("winner");
	}
})

p2.addEventListener("click", function(){
	if (!finished){
		p2Score ++;
		p2Display.textContent = p2Score;
	}
	if (p2Score===maxRound){
		finished = true;
		p2Display.classList.add("winner");
	}
})

resetButton.addEventListener("click", function(){
	reset();
})

function reset(){
	finished=false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}