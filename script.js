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
  var alphabet = "abcdefghijklmnopqrstuvwxyz";  //alphabet string to grab random alpha character
  var special = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";   //special character string to grab random special character

  //function found online to test if string only contains numbers
  String.prototype.isNumber = function(){return /^\d+$/.test(this);}  
  
  //user selects length of password between 8 and 128 characters
  while (userLength < 8 || userLength > 128){
    userLength = prompt("How many characters will your password be? Please choose a value between 8 and 128.");
    //check that the user has only input numbers
    if (!userLength.isNumber()){
      alert("Please only enter numbers.");
      userLength = 0; //if user enters alphanumeric character then reset the value to zero to repeat the loop.
    }
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
  
    //index number randomly generated to choose character type
    var randIndex = Math.floor((Math.random() * userOpts.length))
    var num = 0;   //variable to hold randomly generated index numbers for switch statement

    //switch statement to generate the character at i position
    switch(userOpts[randIndex]) {
      case "Upper case":
        num = Math.floor((Math.random() * alphabet.length))
        userPassword += alphabet[num].toUpperCase();
        break;
      case "Lower case":
        num = Math.floor((Math.random() * alphabet.length))
        userPassword += alphabet[num];
        break;
      case "Numerical":
        userPassword += Math.floor((Math.random() * 10));
        break;
      case "Special character":
        num = Math.floor((Math.random() * special.length))
        userPassword += special[num];
        break;
    }
  }
  
  return userPassword;    //return the value we generated
}