function shortestStepsToNum(num) {
    // Good Luck!
    let steps = 0
    while (num > 1) {
       num % 2 == 0 ? num /= 2 : num--
       steps++
    }
    return steps
  }
  
  console.log(shortestStepsToNum(1))
  
// autre solution
//   const shortestStepsToNum = (num, step = 0) => {
//     while(num>1) num%2 ? num-- : num/=2, step++;
//     return step;
//   }