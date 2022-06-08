function findLargest(numbers) {
    // Your code goes here
 
    numbers.sort();
    let n = numbers.length;
    return numbers[n-1]
 }
   
  console.log(findLargest([1, -28, 88, 200, 7]));
 