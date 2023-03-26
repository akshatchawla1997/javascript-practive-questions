// Sum of numbers in a given range

const sumOfRange = (from,to)=>{
    let sum = 0;
    for (let i=from;i<=to;i++){
        sum+=i;
    }

    console.log(sum);
}

sumOfRange(3,8);