var inquirer = require("inquirer");

var card = function(front, back){
	this.front = front;
	this.back = back;
}

var firstPresident = new card(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
//console.log(firstPresident.front); 

// "George Washington"
//console.log(firstPresident.back); 

inquirer.prompt([{
				name: "question",
				message: firstPresident.front
			},
// Wish I could omit this from displaying
			{ 
				name: "correctAnswer",
				message: firstPresident.back
// 
			}])
			.then(function(answers){

			if (answers.message = firstPresident.front) {
				console.log("you are correct");

			} else {
				console.log("Wrong! the correct answer is" + firstPresident.back);
			}
			}) 
module.exports = card; 