function destroyer(arr,...rest) {
    // je met le rest dans un array
    let arr2 = [];
    arr2.push(...rest);
    
    // si des arguments de l'array 1 sont sont contenus dans l'array 2, retirer ces éléments de l'array1
    const res = arr.filter(item => !arr2.includes(item));
    
    // je renvoie le new set
         return res
      }
      
     console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
    
     //You will be provided with an initial array (the first argument in the destroyer function),
     // followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
    
    