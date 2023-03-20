const factorial = (number)=>{
fact =1;
{
    for(i=2;i<=number;i++){
        fact*=i;
    }
    console.log(`factorial of ${number} is ${fact}`)
}}

factorial(5)