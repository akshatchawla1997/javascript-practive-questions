const palindrome = (Number)=>{
    let digit=reverse=0
    number = Number
    while(number>0){
        digit = number%10;
        reverse= (reverse*10)+digit;
        number=~~(number/10);
    }
    (reverse===Number)?console.log(`${Number} is a palindrome number` ):console.log(`${Number} is not a palindrome number` )
    
}

palindrome(200);
palindrome(101);