// Reverse of a number
const numberReverse = (number)=>{
    let digit=reverse=0
    while(number>0){
        digit = number%10;
        reverse= (reverse*10)+digit;
        number=~~(number/10);
    }
    console.log(reverse)
}

numberReverse(203);