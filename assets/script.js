// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password based on options
function generatePassword(length, hasUpperCase, hasLowerCase, hasNumbers, hasSpecialCharacters) {
  let characters = ' ';
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

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
