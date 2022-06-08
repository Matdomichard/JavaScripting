let animals = ["Lion", "Rabbit", "Mouse", "Monkey", "Lion","Ape"]  
let usingFilter = () => {  
return unique = animals.filter(function(item,index){  
      return animals.indexOf(item) == index;  
   });  
}  
console.log(usingFilter(['Lion', 'Rabbit', 'Mouse', 'Monkey', 'Ape']))  

// sinon utiliser let unique = [...new Set(animals)]   

// let animals = ["Lion", "Rabbit", "Mouse", "Monkey", "Lion","Ape"]  
//let unique = [...new Set(animals)]  
//console.log(unique)  
//Output: ['Lion', 'Rabbit', 'Mouse', 'Monkey', 'Ape']  