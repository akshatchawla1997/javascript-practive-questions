const strongNumber =(number)=>{
    let sum=0, n=number
    while(n>1){
        fact = 1;
        let x=n%10;
        for (i=1;i<=x;i++){
            fact *= i
    }
    console.log(fact)
    sum+=fact
    n=~~n/10
    }
    (sum===number)?console.log(`${number} is a strong number`):console.log(`${number} is not a strong number`)
}

strongNumber(145);