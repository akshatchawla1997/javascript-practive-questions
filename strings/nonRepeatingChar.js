// Find non-repeating characters in a string

function nonRepeatingCharacter(string){
    let frequency = {}
    for (let char of string){
        if(frequency[char]){
            frequency[char]++
        }else{
            frequency[char]=1;
        }
    }
    let nonRepeatingChar = []
    for (let char in frequency){
        if(frequency[char]===1){
            nonRepeatingChar.push(char)
        }
    }
    return nonRepeatingChar;
}
const str = "akshat chawla"
console.log(nonRepeatingCharacter(str))
