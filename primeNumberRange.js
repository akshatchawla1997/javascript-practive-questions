// Prime number within a given range
const primeNumberRange =(to, from)=>{
    for (let i = to; i<=from;i++){
        let count = 0;
    for (let j=2;j<i/2;j++){
        if(i%j==0){
            count=1;
            break;
        }
    }
    count==0?console.log(`${i} is prime number`):console.log(`${i} is not a prime number`)

    }
}

primeNumberRange(5,25);