const primeNumber = (number)=>{
    let count = 0;
    for (let i=4;i<number/2;i++){
        if(number%i==0){
            count=1;
            break;
        }
    }
    count==0?console.log(`${number} is prime number`):console.log(`${number} is not a prime number`)
}

primeNumber(41);