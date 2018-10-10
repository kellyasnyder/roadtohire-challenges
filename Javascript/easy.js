// EASY: Create two variables and assign a person’s name to each. Console log a statement that says which 
// name is shorter or longer, and by how many characters.
// Example output: “The name Thomas is longer than John by 2 characters”

var nomOne = "John"
var nomTwo = "Jacob"

function compareNames() {
    if (nomOne.length > nomTwo.length) {
        var difference = nomOne.length - nomTwo.length;
        return ("The name " + nomOne + " is longer than " + nomTwo + " by " + difference + " characters");
    }
    else {
        var difference = nomTwo.length - nomOne.length;
        return ("The name " + nomTwo + " is longer than " + nomOne + " by " + difference + " characters");
    }
}

console.log(compareNames())