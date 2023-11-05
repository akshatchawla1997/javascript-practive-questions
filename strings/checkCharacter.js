// Check whether a character is a alphabet or not

function checkCharacter(character){
    let asciivalue = character.charCodeAt()
    return ((asciivalue>=65 && asciivalue<=90)||(asciivalue>=97 && asciivalue<=122))?"Alphabet":"non alphabetic"
}

console.log(checkCharacter("@"))