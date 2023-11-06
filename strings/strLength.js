// Length of the string without using strlen() function

function stringLength(string){
    let length=0;
    while(string[length]!== undefined){
        length++
    }   
    return length; 
}

console.log(stringLength("akshat chawla"));