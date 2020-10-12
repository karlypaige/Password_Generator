// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Query user for input
function generatePassword(){

  //variables to be used in this section
  var userPassword = '';  //emtpy string for the generated password
  var userLength = 0;     //holds user input. initiated to 0 to start the while loop.
  var userOpts = [];      //empty array to hold user selected char types
  var charTypes = ["Upper case", "Lower case", "Numerical", "Special character"]; //all possible chartypes to choose

  //user selects length of password between 8 and 128 characters
  while (userLength < 8 || userLength > 128){
    userLength = prompt("How many characters will your password be? Please choose a value between 8 and 128.");
  };
  

  //user selects char types to be used in the password
  for (i=0; i<charTypes.length; i++){
    var userInput = confirm("Please select char types. Do you want to include " + charTypes[i] + "?")

    //as user selects char type add it to the user selection array
    if (userInput == true){ 
      userOpts[userOpts.length] = charTypes[i];
    }
  }

  //loop to generate each character of the string that will be the password.
  for (j=0; j<userLength; j++){
  
    console.log(j);
    //index number randomly generated to choose character type
    var randIndex = Math.floor((Math.random() * userOpts.length))
    console.log("random index: " + randIndex);

    //switch statement to generate the character at i position
    switch(userOpts[randIndex]) {
      case "Upper case":
        userPassword += "A";
        break;
      case "Lower case":
        userPassword += "a";
        break;
      case "Numerical":
        var num = Math.floor((Math.random() * 10));
        userPassword += "1";
        break;
      case "Special character":
        userPassword += "!";
        break;
    }
  }
  console.log(userPassword);
  return userPassword;    //return the value we generated
}