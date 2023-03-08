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
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
