// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password based on options
function generatePassword() {
  let characters = '';

  console.log("1---" + characters);

  // Store length of password from user input
var length = prompt("How many characters would you like your password to be?");
// Reject any password under 8 in length and start over
if (length < 8) {
  alert("Password must be at least 8 characters");
  return null;
} else if (length > 128) {
  alert("Password must be no more than 128 characters")
  return null;
}

console.log("2---" + characters);

// Ask and store follow up questions for password
var hasUpperCase = confirm("Would you like Upper Case characters?");
var hasLowerCase = confirm("Would you like Lower Case characters?");
var hasNumbers = confirm("Would you like Numbers?");
var hasSpecialCharacters = confirm("Would you like Special Characters?");

 // Define allowable characters
  
 if (hasUpperCase) {
  characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}
if (hasLowerCase) {
  characters += 'abcdefghijklmnopqrstuvwxyz';
}
if (hasNumbers) {
  characters += '0123456789';
}
if (hasSpecialCharacters) {
  characters += '!@#$%^&*()';
}

console.log(length, hasUpperCase, hasLowerCase, hasNumbers, hasSpecialCharacters);
console.log("3---" + characters);

var result = '';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
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
