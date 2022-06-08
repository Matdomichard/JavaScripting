var table = [
  "bonjour",
  "kayak",
  "salut",
  "ressasser",
  "toto",
  "javascript",
  "été",
  "algo"
];
// La manière la plus simple pour le palindrome est de voir si un string est égale à son inverse
// La méthode reverse() permet d'inverser toutes les valeurs d'un tableau

// La méthode filter dans un tableau permet de filtrer les différents éléments d'un tableau
// quand on veut garder l'élément, on return true
var palindromeTable = table.filter(word => {
  // On transorme chaque mot en tableau avec les lettres
  var originWordTable = word.split("");

  // On transorme chaque mot en tableau avec les lettres puis on utilise reverse
  var reverseWordTable = word.split("").reverse();

  // On transoforme les tableaux en string avec join() et on les compare dans une condition
  // ATTENTION en JS []===[] a pour valeur false on ne peut pas comparer deux tableau comme ça.
  // On passe donc par un string pour faire la comparaison
  if (originWordTable.join() === reverseWordTable.join()) {
    return true;
  }
});

console.log(palindromeTable);