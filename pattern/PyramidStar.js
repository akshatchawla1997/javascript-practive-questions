// Pyramid Star pattern in javascript

//     *
//    ***
//   *****
//  *******

function pyramidStar(n){
    for(let i=1;i<=n;i++){
        var spaces = ' '.repeat(n-i)
        var stars = '*'.repeat(i)
        console.log(spaces,stars)
    }
}

pyramidStar(5)