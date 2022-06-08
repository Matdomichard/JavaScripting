function sumTwoSmallestNumbers(numbers) {  
    //trier l'array du plus petit au plus grand
   // trouver deux plus petits nombres de l'array
   // aditionner les deux et retourner la réponse
      const sortedArray = numbers.sort(function(a, b) {
        return a - b;
      });
      const firstnum = sortedArray[0] ;
      const secondNum = sortedArray[1];
  
      const result = firstnum + secondNum ;
      return result
  }