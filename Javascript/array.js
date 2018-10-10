// Create an array of 3 objects, all of which containing a name property and an
// age property. Write a script that will generate a random number from 0-2,
// call the object with that index, and print “[name] is [age].”

let people = [
	{name: 'John', age: '22'}, 
	{name: 'Sally', age: '24'}, 
	{name: 'Kevin', age: '27'}
];

const randomPerson = people[Math.floor(Math.random() * 3)];

const sentence = randomPerson.name + " is " + randomPerson.age;

console.log(sentence);