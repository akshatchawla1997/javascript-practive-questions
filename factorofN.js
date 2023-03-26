// Factor of a Number

const factor = (number)=>{
    for (i=2;i<=number/2;i++){
        (number%i===0)?console.log(i):"";
    }
}
factor(20)