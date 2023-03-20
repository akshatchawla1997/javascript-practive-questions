const armstrong = (Number)=>{
    let multiple = 1,digit=sum=0

    number = Number
    while(number>0){
        digit = (number%10);
         multiple = digit*digit*digit
    
        sum+=(multiple);
        number=~~(number/10);
    }
    (sum===Number)?console.log(`${Number} is a armstrong number` ):console.log(`${Number} is not a armstrong number` )
    
}

armstrong(152);