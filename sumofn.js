// Sum of First N Natural numbers:

const sumOfN=(number)=>{
    let sum = 0;
    for (let i=0;i<=number;i++){
        sum+=i;
    }

    console.log(sum);
}

sumOfN(3);