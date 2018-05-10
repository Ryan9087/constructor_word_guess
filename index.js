var inquirer = require('inquirer');
var colors = require('colors');
var word = require('./word');

var pilesOfWord = ['goose', 'truck', 'apple', 'tree', 'gas station'];

var chances = 0;

var wordGuessing = getNewWord();

var question = {
	name: 'choice',
	message: "Enter your choice"
};

function askPlayer() {
	inquirer.prompt([question]).then( answers => {
		//console.log(answers);
		var result = wordGuessing.checking(answers.choice);
		wordGuessing.display();

		if(result) {
    		console.log("CORRECT!!!".yellow);
    	} else {
    		console.log("INCORRECT!!!".red);
    		chances--;
    		console.log(chances + " guess remaining!".red);
    	}

    	if(chances == 0) {
    		console.log("YOU LOSE!!!".red);
    	}

    	if(wordGuessing.isComplete()) {
    		console.log("YOU GOT IT RIGHT! NEXT WORD!".white);
    		wordGuessing = getNewWord();
    	}

		askPlayer();
	});
}

function getNewWord() {
	var randomWordSelector = Math.floor(Math.random() * pilesOfWord.length);

	var wordToTransfer = pilesOfWord[randomWordSelector];

	chances = Math.ceil(wordToTransfer.length * 0.5); //chances = 1/2 length of word

	return new word(wordToTransfer);
}

askPlayer();

