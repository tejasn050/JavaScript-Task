// JAVASCRIPT BASICS - PRACTICAL TASKS


// 1. Create variables for student name, age and mark
// and print all three.

let studentName = "Tejas Nagaraj";
let studentAge = 23;
let studentMark = 95;

console.log("----- Student Information -----");
console.log("Name:", studentName);
console.log("Age:", studentAge);
console.log("Mark:", studentMark);



// 2. Ask the user's name using prompt()
// and display it using alert().

let enteredName = prompt("Please enter your name");

alert("Hello " + enteredName + "!");




// 3. Ask the user's age using prompt()
// and print it using console.log().

let enteredAge = prompt("Please enter your age");

console.log("Your age is:", enteredAge);



// 4. Ask the user a question using confirm().

let response = confirm("Do you enjoy learning JavaScript?");

console.log("Your response is:", response);




// 5. Ask the user's name and display it
// on the webpage using document.writeln().

let displayName = prompt("Enter your name");

document.writeln("<h2>Welcome, " + displayName + "!</h2>");
document.writeln("<p>Thank you for visiting my JavaScript page.</p>");


// END OF PRACTICAL TASKS