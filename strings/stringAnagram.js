// Check if two strings are Anagram or not

// Anagram is a string where characters of one string is equal to characters of another string

function anagramString(string1, string2){
    let string1Arr = string1.split('').sort().join('');
    let string2Arr = string2.split('').sort().join('');
    if(string1.len != string2.len){
        return 0
    }else{
        return string1Arr === string2Arr
    }

}

console.log(anagramString("palindrome","planidrmeo"));