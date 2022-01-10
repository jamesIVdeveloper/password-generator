// Assignment code here
var generatePassword = function () {
  console.log("working");
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var password = "";

  // confirm prompts

  var lowerCaseConfirm = window.confirm(
    "Do you want to include lowercase letters?"
  );

  var upperCaseConfirm = window.confirm(
    "Do you want to include upper case letters?"
  );

  var numericConfirm = window.confirm("Do you want to include numbers?");

  var specialConfirm = window.confirm(
    "Do you want to include special characters?"
  );

  var passwordLength = window.prompt(
    "How long do you want your password tobe? (8-128)"
  );

  // verify length

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Length must be between 8 - 128");
    window.prompt("How long do you want your password tobe? (8-128)");
  }
  console.log(passwordLength);
  // verify which prompts confirmed

  // loop through selected variables and create password

  for (var i = 0; i < passwordLength.length; i++) {
    password += lowerCase.charAt(Math.random() * lowerCase.length);
    password += upperCase.charAt(Math.random() * upperCase.length);
    password += numbers.charAt(Math.random() * numbers.length);
    password += specialCharacters.charAt(
      Math.random() * specialCharacters.length
    );
  }
  return password;
};

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
