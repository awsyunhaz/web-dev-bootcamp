var todos = [];
var input = prompt("What would you like to do?")

while (input !== "quit"){
	if (input === "new"){
		var newTodo = prompt("Enter new todo")
		todos.push(newTodo)
		console.log(newTodo + " added!")
	}
	else if (input === "delete"){
		var ind = prompt("Enter the index")
		var todo = todos.splice(ind, 1)
		console.log(todo + " deleted!")

	}
	else if (input === "list"){
		todos.forEach(function(todo, i){
			console.log(i + ': ' + todo)
		})
	}
	var input = prompt("What would you like to do?") 
}

console.log("Quit!")