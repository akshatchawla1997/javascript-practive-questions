// Capitalize the first and last character of each word of a string

function captiliseFirstAndLast(string){
    const stringarr = string.split(' ')
    const Capitalize = stringarr.map((word, index)=>{
        return ((word.length>1)?word[0].toUpperCase() + word.slice(1,-1) + word.slice(-1).toUpperCase():word.toUpperCase())
    })
    return Capitalize;
}

console.log(captiliseFirstAndLast("akshat chawla"));