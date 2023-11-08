// remove all other characters except Alphabets

function removeCharExceptAlphabets(str){
    let len = 0,asciivalue,updatedString="";
    while(str[len]!==undefined){
        asciivalue = str[len].charCodeAt()
        if((asciivalue>=65 && asciivalue<=90)||(asciivalue>=97 && asciivalue<=122)){
            updatedString += String.fromCharCode(asciivalue);
    }
    len++
}
return updatedString;
}

console.log(removeCharExceptAlphabets("Akshatchawla1@1997"))