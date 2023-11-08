// Remove brackets from an algebraic expression 

function removeBrackets(str) {
    let len = 0, updatedString = "";
    while (str[len] !== undefined) {
        asciivalue = str[len].charCodeAt();
        if (str[len] !== '(' && str[len] !== ')' && str[len] !== '{' && str[len] !== '}' && str[len] !== '[' && str[len] !== ']' && str[len] !== '<' && str[len] !== '>') {
            updatedString += str[len];
        }
        len++;
    }
    return updatedString;
}

console.log(removeBrackets("(x+x)-{1[1(1)1]1}"));
