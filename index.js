const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let firstPasswordEl = document.getElementById("password1")
let secondPasswordEl = document.getElementById("password2")

function getCharacter() {
    let char = characters[Math.floor(Math.random() * characters.length)]
    return char
}

function getRandomPasswordOne() {
    let firstPassword = ""
    for (let i = 0; i < 15; i++) {
        firstPassword += getCharacter()
    }
    return firstPassword
}

function getRandomPasswordTwo() {
    let secondPassword = ""
    for (let i = 0; i < 15; i++) {
        secondPassword += getCharacter()
    }
    return secondPassword
}

function showTwoPasswords() {
    firstPasswordEl.textContent = getRandomPasswordOne()
    secondPasswordEl.textContent = getRandomPasswordTwo()
}
