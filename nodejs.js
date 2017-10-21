var auditWord = require('./word.js');
var randomizeWord = require('./game.js');
var inquirer = require('inquirer');

//starts the game and sets variables
var startGame = function() {
    gameover = false;
    found = false;
    guesses = [];
    tries = 10;
    var word = new randomizeWord(); //grabs a new word
    randomWord = word.wordSelect;
    console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvv")
    console.log("\nHANGMAN: FANTASY EDITION");
    console.log("\n^^^^^^^^^^^^^^^^^^^^^^^^^^^")
    console.log("\n(press ctrl + c at any time to end game)")
    console.log("\nThe category is:", currentCategory);
    console.log("\nTries remaining:", tries);
    currentWord = new auditWord(randomWord);
    currentWord.createBlanks();
    console.log("\n" + currentWord.render() + "\n");
    userPrompt();
};


var userPrompt = function() {
    currentWord.wordFound();

    if (tries < 1 || found) {
        gameover = true;
        playAgain();
    } else {

        inquirer.prompt([{
            name: "guess",
            message: "Type a letter to guess the word."

        }]).then(function(answers) {
            if (guesses.find(function(item) {
                    return item === answers.guess.toUpperCase();
                })) {
                console.log("\nLetter already guessed. Try another one!\n");
                userPrompt();
            } else {
                guesses.push(answers.guess.toUpperCase());
                console.log("\nGuesses: " + guesses);
                letFound = currentWord.check(answers.guess);
                console.log("\nAttempts remaining:", tries);
                console.log("\n" + currentWord.render() + "\n");
                userPrompt();
            }
        });
    }
};


var playAgain = function() {
    if (gameover = true) {
        if (tries < 1) {
            console.log("\nDefeat!\n");
        } else {
            console.log("\nVictory!\n");
        }

        inquirer.prompt([{
            type: "confirm",
            name: "again",
            message: "Play again?"

        }]).then(function(restart) {
            if (restart.again) {
                console.log("Generating new word!");
                startGame();
            } else {
                console.log("\nThank you for playing!\n");
            }
        });
    }
};


startGame();