// Sum of digits of a number

const digitsSum = (number)=>{
    let sum= x = 0;
    while(number>0){
        x = number%10;
        sum+=x;
        number=~~(number/10)
    }
    console.log(sum)
}

digitsSum(151);