// HCF of a number i.e Highest common factor of a number

const hcfofN = (num1,num2)=>{
    hcf = 1;
    for(i=2; i<num1 || i<num2;i++){
        if(num1%i==0&&num2%i==0){
            hcf = i;
        }
    }
    console.log(`hcf of ${num1} and ${num2} is ${hcf}`)
}  

hcfofN(12,24);
