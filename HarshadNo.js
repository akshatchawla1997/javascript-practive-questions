// Find the Harshad Number
const HarshadNo =(num)=>{
    let sum = 0,number=num;
    while(num>0){
        sum=sum+(num%10);
        num=~~(num/10)
    }
    (number%sum===0)?console.log(`${number} is a Harshad Number`):console.log(`${number} is not a Harshad Number`)
}
HarshadNo(18);
HarshadNo(15)