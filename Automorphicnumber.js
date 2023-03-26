// Find the automorphic Number
const automorphic = (number)=>{
    let n=number;
    let square = n*n;
    (checknum(n,square))?console.log(`${number} is automorphic number`):console.log(`${number} is not a automorphic number`)
}

const checknum =(n,sq)=>{
    while(n>0){
        if(n%10!=sq%10){
            return false;
        }
        n=~~(n/10)
        sq=~~(sq/10)
    }
    return true
}
automorphic(20);
automorphic(25);