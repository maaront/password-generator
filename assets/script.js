// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




window.alert("Any random string");
// var r=prompt("Enter a string");
// var b=confirm("Are you fine");

//var r=Math.floor(Math.random()*10);