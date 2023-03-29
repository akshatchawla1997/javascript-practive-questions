// LCM of a number i.e, Lowest Common Factor of a number
const lcmofN= (num1,num2)=>{
    let fact=1,lcm=0;
(num1>num2)?lcm=num1:lcm=num2;
while(fact){
    if(lcm%num1===0&&lcm%num2===0){
        console.log(lcm);
        fact=0;
    }
}
}
lcmofN(12,24)
lcmofN(60,60)