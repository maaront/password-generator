// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign possible characters
upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
specialChars = '!@#$%^&*()';
numbers = '0123456789';

// Generate password based on options
function generatePassword() {
  let characters = '';

  // Store length of password from user input
var length = prompt("How many characters would you like your password to be?");
// Reject any password under 8 in length and start over
if (length < 8) {
  alert("Password must be at least 8 characters");
  return null;
}
// Reject andy password over 128 in length and start over
else if (length > 128) {
  alert("Password must be no more than 128 characters")
  return null;
}

// Ask and store follow up questions for password
var hasUpperCase = confirm("Would you like Upper Case characters?");
var hasLowerCase = confirm("Would you like Lower Case characters?");
var hasNumbers = confirm("Would you like Numbers?");
var hasSpecialCharacters = confirm("Would you like Special Characters?");

/*
 // Add chosen characters to the pool of available characters to generate password from
 if (hasUpperCase) {
  characters += upperCaseChars;
}
if (hasLowerCase) {
  characters += lowerCaseChars;
}
if (hasNumbers) {
  characters += numbers;
}
if (hasSpecialCharacters) {
  characters += specialChars;
}

// Write values to console
console.log(length, hasUpperCase, hasLowerCase, hasNumbers, hasSpecialCharacters);

// Randomly choose list of characters from character pool based on length chosen
var result = '';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  */

// Ensure password includes at least one character from each type
// Declare variable "chars" and define as empty
let chars = "";
// If hasSpecialCharacters is "true" then randomly assign one character to the "chars"
if (hasSpecialCharacters) {
  chars += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
}
// If hasUpperCase is "true" then randomly assign one character to the "chars"
if (hasUpperCase) {
  chars += upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length));
}
// If hasLowerCase is "true" then randomly assign one character to the "chars"
if (hasLowerCase) {
  chars += lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length));
}
// If hasNumbers is "true" then randomly assign one character to "chars"
if (hasNumbers) {
  chars += numbers.charAt(Math.floor(Math.random() * numbers.length));
}

// Generate remaining characters. Define "i" as whatever length result is based off what individual characters were added above
// Then, as long as i is less than the chosen length of password, add a random character from the entire character pool
for (let i = chars.length; i < length; i++) {
  result += chars.charAt(Math.floor(Math.random() * chars.length));
}

// Now shuffle password characters
result = result.split("").sort(() => Math.random() - 0.5).join("");

// Return the shuffled result
  return result;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
