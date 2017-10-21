//arrrays
var wordBank = [
    ["Minotaur", "Medusa", "Gorgon", "Hydra", "Goblin", "Dragon", "Vampire", "Werewolf", "Zombie", "Jersey Devil", "Wendigo", "Chupacabra", "Basilisk", "Chimera", "Griffon", "Hippogriff", "Dullahan"],
    ["Merlin", "Robin Hood", "King Arthur", "Hercules", "Hector", "Achilles", "Theseus", "Perseus", "Beowulf", "Little John", "Sinbad", "Cuchulain", "Ali Baba", "Paul Bunyan", "Morgan Le Fay"]
];

//determines category based on randomizeWord function
var randomCategory = function() {
    if (randomizeWord.categorySelect === wordBank[0]) {
        currentCategory = "Monsters";
    } else if (randomizeWord.chosenCategory === wordBank[1]) {
        currentCategory = "People";
    }
};

//Chooses a random word based on category
var randomizeWord = function(categorySelect, wordSelect) {

    this.categorySelect = wordBank[Math.floor(Math.random() * wordBank.length)];
    this.wordSelect = this.categorySelect[Math.floor(Math.random() * this.categorySelect.length)];

    if (this.categorySelect === wordBank[0]) {
        currentCategory = "Monsters";
    } else if (this.categorySelect === wordBank[1]) {
        currentCategory = "People";
    }
};

module.exports = randomizeWord;