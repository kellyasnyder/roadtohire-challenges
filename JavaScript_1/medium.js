// MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing 
// in all lowercase), or neither. Use prompt to get user input, and then console log whether the user 
// was shouting, whispering, or talking normally.

function myFunction() {
    var userInput = prompt("Please enter text below", "Type Here");
    if (userInput == userInput.toUpperCase()) {
        return "User is shouting.";
    } else if (userInput == userInput.toLowerCase()) {
        return "User is whispering.";
    }
    else {
        return "User is neither shouting or whispering."
    }
}

console.log(myFunction());