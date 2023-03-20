const rangeArmstrong = (from, to)=>{
    for(let i = from; i<=to; i++){
        let multiple = 1,digit=sum=0

    number = i
    while(number>0){
        digit = (number%10);
         multiple = digit*digit*digit
    
        sum+=(multiple);
        number=~~(number/10);
    }
    (sum===i)?console.log(`${i} is a armstrong number` ):console.log(`${i} is not a armstrong number` )
    
    }
}

rangeArmstrong(100,200);