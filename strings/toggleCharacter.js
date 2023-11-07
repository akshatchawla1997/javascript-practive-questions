function toggleStringCharacter(s) {
    let updatedString = "";
    
    for (let i = 0; i < s.length; i++) {
        let asciiValue = s.charCodeAt(i);
        
        if (asciiValue >= 97 && asciiValue <= 122) {
            // Convert lowercase to uppercase
            let characterValue = asciiValue - 32;
            updatedString += String.fromCharCode(characterValue);
        } else if (asciiValue >= 65 && asciiValue <= 90) {
            // Convert uppercase to lowercase
            let characterValue = asciiValue + 32;
            updatedString += String.fromCharCode(characterValue);
        } else {
            // For non-alphabet characters, keep them unchanged
            updatedString += s[i];
        }
    }
    
    return updatedString;
}

console.log(toggleStringCharacter("Akshat")); // Output: "aKSHAT"
