var inquirer = require("inquirer");


var clozecard = function (text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = function(){
		var partial = text.replace(cloze, "...");
		console.log("this contains partial " + partial);
	}
};

var firstPresident = new clozecard(
    "George Washington was the first president of the United States", "George Washington");

console.log (firstPresident.partial());

// needs inquirer.prompt
//needs log error