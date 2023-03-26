// Find the perfect number

const perfectNo = (number)=>{
    let n=number,sum=0;
    for (i=1;i<=n/2;i++){
        (n%i==0)?sum+=i:"";
    }
    sum===number?console.log(`${number} is a perfect number`):console.log(`${number} is not a perfect number`)
}
perfectNo(6);
perfectNo(38);
