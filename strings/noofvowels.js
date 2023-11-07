// Count the number of vowels

function noOfVowels(string) {
    let length = 0;
    let count = 0;
    
    while (string[length] !== undefined) {
        const s = string[length].toLowerCase(); // Convert the character to lowercase for case insensitivity
        if (s === 'a' || s === 'e' || s === 'o' || s === 'i' || s === 'u') {
            count++;
        }
        length++;
    }
    
    return count;
}
console.log(noOfVowels("chaurasiya"))