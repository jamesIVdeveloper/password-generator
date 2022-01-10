// Assignment code here
var generatePassword = function() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var length = "";

  // confirm prompts

  var lowerCaseConfirm = window.confirm("Do you want to include lowercase letters?");

  var upperCaseConfirm = window.confirm("Do you want to include upper case letters?");

  var numericConfirm = window.confirm("Do you want to include numbers?");

  var specialConfirm = window.confirm("Do you want to include special characters?")
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) {
  writePassword();
};
