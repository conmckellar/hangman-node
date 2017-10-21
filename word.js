var hideWord = require('./letter.js');

//Check word against userChoice
var auditWord = function(word, inputChoice) {

    this.word = word;
    this.lets = []; //stores letters
    this.splitWord = word.split(''); //split string into substrings
    this.inputChoice = inputChoice;
};

//using prototypes to save some memory
auditWord.prototype.createBlanks = function() {
    for (var i = 0; i < this.word.length; i++) {
        var newLet = new hideWord(this.word[i]);
        if (this.word[i].valueOf() !== " ") {
            this.lets.push(newLet.blank());
        } else {
            this.lets.push(newLet.space());
        }
    }
};


auditWord.prototype.check = function(guessedLetter) {
    var lower = guessedLetter.toLowerCase();
    var upper = guessedLetter.toUpperCase();
    for (var i = 0; i < this.lets.length; i++) {
        if (this.word[i].valueOf() === lower || this.word[i].valueOf() === upper) {
            this.lets[i] = this.word[i].valueOf();
        }
    }
    var j = (this.word.indexOf(lower));
    if (j === -1) {
        tries--;
    }
};

    //join letters in the 'lets' array into a string
auditWord.prototype.wordFound = function() {
    if (this.lets.join('') === this.word) {
        found = true;
    } else {
    }
};


auditWord.prototype.render = function() {
    return this.lets.join(' ');
};

module.exports = auditWord;