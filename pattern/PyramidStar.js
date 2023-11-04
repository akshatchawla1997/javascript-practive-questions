// Pyramid Star pattern in javascript

//     *
//    ***
//   *****
//  *******

function pyramidStar(n){
    for(let i=1;i<=n;i++){
        const spaces = ' '.repeat(n-i)
        const stars = '* '.repeat(i)
        console.log(spaces,stars)
    }
}

pyramidStar(5)