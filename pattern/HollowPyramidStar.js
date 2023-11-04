// Pattern for Hollow pyramid star 

//     *
//    * *
//   *   *
//  *******

function hollowPyramid(n) {
    for (let i = 1; i <= n; i++) {
      const spaces = ' '.repeat(n - i);
      if (i === 1 || i === n) {
        const star = '* '.repeat(i);
        console.log(spaces, star);
      } else {
        const star = `* ${' '.repeat(2*(i-2))}*`;
        console.log(spaces, star);
      }
    }
  }
  
  hollowPyramid(5);  