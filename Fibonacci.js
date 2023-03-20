const fibonacci = (number)=>{
    let nextTerm=a = 0,b=1;

    for(i=1;i<number;i++){
        nextTerm = a + b;
        a = b;
        b = nextTerm;
        console.log(nextTerm)
    }
}
fibonacci(10);