const perfectsquare = (number)=>{
    let x = Math.sqrt(number);
    (Number.isInteger(x))?console.log(`${number} is a perfect square`):console.log(`${number} is not a perfect square`)
}


perfectsquare(25);
perfectsquare(21);