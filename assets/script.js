// Assignment Code
var generateBtn = document.querySelector("#generate");

// Assign possible characters
let upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
let specialChars = "!@#$%^&*()";
let numbers = "0123456789";

// Generate password based on options
function generatePassword() {
  // Store length of password from user input
  var length = prompt(
    "How many characters would you like your password to be?"
  );
  // Reject any password under 8 in length and start over
  if (length < 8) {
    alert("Password must be at least 8 characters");
    generatePassword();
  }
  // Reject andy password over 128 in length and start over
  else if (length > 128) {
    alert("Password must be no more than 128 characters");
    generatePassword();
  }

  // Ask and store follow up questions for password
  var hasUpperCase = confirm("Would you like Upper Case characters?");
  var hasLowerCase = confirm("Would you like Lower Case characters?");
  var hasNumbers = confirm("Would you like Numbers?");
  var hasSpecialCharacters = confirm("Would you like Special Characters?");

  // Ensure at least one character type is selected. If not alert user and restart input selection.
  if (!hasUpperCase && !hasLowerCase && !hasNumbers && !hasSpecialCharacters) {
    alert("You must choose at least one character type!");
    generatePassword();
  }

  // Define variables for each character type and initialize to a random character
  var upperCaseChar = hasUpperCase
    ? upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length))
    : "";
  var lowerCaseChar = hasLowerCase
    ? lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length))
    : "";
  var numberChar = hasNumbers
    ? numbers.charAt(Math.floor(Math.random() * numbers.length))
    : "";
  var specialChar = hasSpecialCharacters
    ? specialChars.charAt(Math.floor(Math.random() * specialChars.length))
    : "";

  let approvedChars = upperCaseChar + lowerCaseChar + numberChar + specialChar;

  // Add the rest of the allowable characters to the chars pool
  let characters = "";

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

  // Subtract length of user input by length of approved characters
  // This is to ensure at least one of each character type is chosen, and then those are stored for later calculation
  length = length - approvedChars.length;

  // Randomly choose list of characters from character pool based on length chosen (minus the rule above)
  var result = "";
  var resultLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * resultLength));
  }

  // Generate remaining characters. Define "i" as whatever length result is based off what individual characters were added above
  // Then, as long as i is less than the chosen length of password, add a random character from the entire character pool
  for (let i = characters.length; i < length; i++) {
    characters += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  // Now add the characters we gathered to ensure at least one character type was chosen, and add them to the rest of the characters
  result = approvedChars + result;

  // Now shuffle password characters
  result = result
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

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
