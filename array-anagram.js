var table = [
  "ordre",
  "donner",
  "roder",
  "recevoir",
  "dorer",
  "plaisir",
  "aaaaa"
];
var originWord = "ordre";
var originWordTable = originWord.split("");

// On va utiliser filter aussi pour obtenir un nouveau tableau avec uniquement les anagrammes
// Pour rappel, On return true quand on veut garder l'élément et false quand on ne veut pas le garder

var anagrammeTable = table.filter(word => {
  //Si les deux mots n'ont pas la même longueur on sait déjà que c'est faux
  if (word.length !== originWord.length) {
    return false;
  }

  // On va transformer les mots que l'on veut comparer en tableau
  var wordTable = word.split("");
  var originWordTable = originWord.split("");

  // On a maintenant 2 tableaux de la même longueur que l'on va trier avec la méthode sort()
  // sort() va trier les différent éléments par ordre alphabétique ou croissant
  // Exemple [ 'a', 'c', 'b'] deviendra [ 'a', 'b', 'c']
  // Après triage on utilise join pour obtenir un string à nouveau Voir Palindrome pour savoir pk on fait cela.
  var sortedWord = wordTable.sort().join("");
  var sortedOriginWord = originWordTable.sort().join("");

  // On compare les deux chaines de caractère si c'est true c'est un Anagramme!
  if (sortedWord === sortedOriginWord) {
    return true;
  }
});

console.log(anagrammeTable);
