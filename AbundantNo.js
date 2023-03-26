// Abundant Number
const abundantNo = (number)=>{
    let sum = 0,n=number;
    for (i=1;i<=number/2;i++){
        (number%i===0)?sum+=i:"";
    }
    (sum>n)?console.log(`${n} is Abundant Number`):console.log(`${n} is not aAbundant Number`)
}
abundantNo(10);
abundantNo(12);