const prenoms = ["john", "vanessa", "FRANCK"]

for(var i=0;i<prenoms.length;i++){
    prenoms[i] = prenoms[i].charAt(0).toUpperCase() + prenoms[i].substring(1).toLowerCase()
}

console.log(prenoms)