var clozeQs = require("./cloze.js");
var BasicFlashCard = require("./basic.js");


var card1 = new BasicFlashCard("what is today's date?", "Aug 5, 2017");
	console.log(card1)
var card2 = new clozeQs("A group of owls is called a parliment.", "parliment");
	console.log(card2)

// var inquirer = require("inquirer");
// var fs = require("fs");
// var count = 0;
// // Create a BasicCard constructor. It should accept front and back arguments.
// function BasicCard (front, back) {
// 	this.front = front,
// 	this.back = back
// };
// // Create a ClozeCard constructor. It should accept text and cloze arguments.
// function ClozeCard (text, cloze) {
// 	this.text=text,
// 	this.cloze=cloze,
// 	this.full = this.text + " " + this.cloze,
// 	this.clozeReturn= function() {
// 		return this.cloze;
// 	},
// 	this.clozePartial = function() {
// 		return this.text;
// 	},
// 	this.clozeFull = function() {
// 		return this.full;
// 	},
// 	this.checkError = function() {
// 		if (this.full.includes(this.cloze)===false) {
// 			throw error;
// 		};
// 	}
// };

// function restart () {
// 	inquirer.prompt([
// 		{
// 			type: "confirm",
// 			name: "restart",
// 			message: "Go back to the start?"
// 		}
// 	]).then(function(answers) {
// 		if (answers.restart === true) {
// 			basicFlashCard();
// 		} else {
// 			console.log("Goodbye!");
// 			process.exit();
// 		}
// 	});
// };

// var basicFlashCard = function() {
// 	if (count < basicQs.length) {
// 		inquirer.prompt([
// 			{
// 				name: "basic",
// 				type: "input",
// 				message: basicQs[count].front
// 			}
// 		]).then(function(answers) {
			
// 			if (answers.basic === basicQs[count].back) {
// 				console.log(basicQs);

// 				console.log("Correct!");
// 			} else {
// 				console.log("I'm sorry, that's the wrong answer.");
// 			};
// 			count++;
// 			basicFlashCard();
// 		});
// 	} else {
// 		console.log("You completed the flashcards!");
// 		inquirer.prompt([
// 			{
// 				type: "confirm",
// 				name: "ask",
// 				message: "Do you want to create a new flashcard?"
// 			}
// 		]).then(function(answers) {
// 			if (answers.ask === true) {
// 				inquirer.prompt([
// 					{
// 						type: "input",
// 						name: "front",
// 						message: "Type the front of your flashcard:"
// 					}, {
// 						type: "input",
// 						name: "back",
// 						message: "Type the back of your flashcard:"
// 					}
// 				]).then(function(answers) {
// 					var card = new BasicCard(answers.front, answers.back);
// 					basicQs.push(card);
// 					fs.writeFile('basic.json', JSON.stringify(basicQs), (err) => {
// 					  if (err) throw err;
// 					});
// 					count = 0;
// 					restart();
// 				});
// 			} else {
// 				count = 0;
// 				restart();
// 			}
		
// 		});
// 	};
// };
// module.exports = BasicCard

// basicFlashCard();