// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

    var newPasswordlength = prompt("Please choose password length.Your password has to be between 8 and 128 characters")



    var confirmCaps = confirm("Do you want to use Capital Letters?");
    var confirmLowercase = confirm("Do you want to use lowercase letter?");
    var ConfirmSpecCase = confirm("Do you want to use Special Cases (ex:!#&)?");
    var confirmNumb = confirm("Do you want to use Numbers?")


    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var lowercase = 'abcdefghijklmnopqrstuvwxyz'
    var numbers = '0123456789'
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[]^_`{|}~'

    // everything is confirmed
    if (newPasswordLength >= 8 && newPasswordLength <= 128 && confirmCaps && confirmLowercase && confirmNumb && ConfirmSpecCase) {
        function generate(length = newPasswordLength) {
            var all = uppercase + lowercase + numbers + symbols;
            var password = '';
            for (var index = 0; index < length; index++) {
                var character = Math.floor(Math.random() * all.length);
                password += all[(character, character + 1)];
            }
            document.getElementById("password").innerHTML = password;
            return password;
        }
        generate(newPasswordLength);
    }

    //Everything but special characters

    else if (confirmCaps && confirmLowercase && confirmNumb) {
        function generate(length = newPasswordLength) {
            var all = uppercase + lowercase + numbers;
            var password = '';
            for (var index = 0; index < length; index++) {
                var character = Math.floor(Math.random() * all.length);
                password += all[(character, character + 1)];
            }
            document.getElementById("password").innerHTML = password;
            return password;
        }
        generate(newPasswordLength);

    }

    // Caps and Lowercase
    else if (confirmCaps && confirmLowercase) {
        function generate(length = newPasswordLength) {
            var password = '';
            for (var index = 0; index < length; index++) {
                var character = Math.floor(Math.random() * all.length);
                password += all[(character, character + 1)];
            }
            document.getElementById("password").innerHTML = password;
            return password;
        }
        generate(newPasswordLength);
    }



}







// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
