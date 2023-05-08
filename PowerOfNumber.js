// Find Power of a number through recursion
const powerOfNumber = (number,power)=>{
    if(power===1){
        return number;
    }else{
        return number * powerOfNumber(number,power-1)
    }
}

console.log(powerOfNumber(3,4));