// Q1
var date = new Date();
console.log(date);
// Q2
function fullname(a,b) {
    console.log("Welcome " + a + b)
}
var firstName = prompt("Enter you first name please");
var lastName = prompt("Enter you last name please");
fullname(firstName,lastName); 
// Q3
function sum(a, b) {
  return a + b;
}

var result = sum(10, 12);

console.log(result);
// Q4
function calc(num1, opr, num2) {
  if (opr === "+") {
    return num1 + num2;
  } else if (opr === "-") {
    return num1 - num2;
  } else if (opr === "*") {
    return num1 * num2;
  } else if (opr === "/") {
    return num1 / num2;
  }
}
var num1 = +prompt("Enter first value");
var operator = prompt("Enter operator");
var num2 = +prompt("Enter second value");
var result = calc(num1, operator, num2);
console.log(result);
// Q5
function square(a){
    console.log(a*a);
}
var userInput = prompt("Enter a number for it to be squared");
square(userInput);
// Q6
function fact(a){
    for(var i=1;i<=a;i--){
      console.log(a)
       *= i 
    }
}
var userInput = prompt("Enter a number to calculate its factorial")
fact(userInput);
// Q7
function counting(a,b){
    for(var i=a;i<=b;i++){
        console.log(a,b);
    }
}
var start = prompt("Enter your suitable start");
var limit = prompt("Enter limit of counting");
counting(start,limit);
// Q10
var word = prompt("Enter a word");

var check = "";

for (var i = word.length - 1; i >= 0; i--) {
  console.log(word[i]);
  check += word[i];
}

if (word === check) {
  console.log(word + " is a palindrome word");
} else {
  console.log(word + " is not a palindrome word");
}
// Q11




  