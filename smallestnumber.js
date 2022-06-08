
const numbers = [34, -345, -1, 100]

function smallestnumber(numbers) {  
    const sortedArray = numbers.sort(function(a, b) {
      return a - b;
    });
    return sortedArray[0]
}

smallestnumber(numbers)