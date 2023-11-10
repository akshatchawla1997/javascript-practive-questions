// Count the sum of numbers in a string

function countNoInString(string){
    const numbers = string.match(/\d+/g)
    const digits = numbers.toString().split('')

    const sum = numbers?digits.reduce((acc, digit)=> acc+=parseInt(digit,10),0):0;
    // console.log(sum)
    return sum
}

console.log(countNoInString("akshat@12234"));
