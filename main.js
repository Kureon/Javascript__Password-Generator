const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// Build from scratch
// Generate two random passwords when the user clicks the button //DONE
// Each password should be 15 characters long //DONE

// Ability to set password length
// Add 'copy-on-click'
// toggle "symbols" and "numbers" on/off

let generateButton = document.getElementById("generate-passwords")
let passwordDisplayOne = document.getElementById("password-one")
let passwordDisplayTwo = document.getElementById("password-two")
let passwordOne = ""
let passwordTwo = ""
let passwordLength = 15

function getPasswordOne() {
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        passwordOne += characters[randomNumber]
    }
}

function getPasswordTwo() {
    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length)
        passwordTwo += characters[randomNumber]
    }
}

generateButton.addEventListener("click", function() {
    getPasswordOne()
    passwordDisplayOne.textContent = passwordOne
    
    if (passwordOne.length === passwordLength) {
        passwordOne = ""
    } else {
        getPasswordOne()
    }

    getPasswordTwo()
    passwordDisplayTwo.textContent = passwordTwo

    if (passwordTwo.length === passwordLength) {
        passwordTwo = ""
    } else {
        getPasswordTwo()
    }
})
