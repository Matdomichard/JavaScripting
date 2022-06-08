//Calculer le montant du panier et afficher “frais de port gratuit” si le client bénéficie de l’offre promotionnelle :

var shopping = [
        { "product" : "Livre", unitPrice : 10.99},
        { "product" : "CD", unitPrice : 15.99},
        { "product" : "DVD", unitPrice : 23}
    ]
    

let total = 0

for (let i=0;i<shopping.length;i++) {
    total += shopping[i].unitPrice
}

total = Math.round(total*100)/100;

console.log("total du panier 1 : ", total)

var shopping2 =  [
    { "product" : "Livre", unitPrice : 30},
    { "product" : "CD", unitPrice : 20},
    { "product" : "DVD", unitPrice : 25}
]



if(total>60){
    console.log("frais de port gratuit")
}



let total2 = 0


for (let i=0;i<shopping2.length;i++) {
    total2 += shopping2[i].unitPrice
}

console.log("total du panier 2 : ", total2)

if(total2>60){
    console.log("frais de port gratuit")
}

// Refaites les mêmes opérations en prenant en compte la quantité 

var shoppingQte = [
        { "product" : "Livre", unitPrice : 10.99, quantity:1},
        { "product" : "CD", unitPrice : 15.99, quantity:1},
        { "product" : "DVD", unitPrice : 23, quantity:3}
    ]
    
var shoppingQte2 =  [
        { "product" : "Livre", unitPrice : 10, quantity:1},
        { "product" : "CD", unitPrice : 5, quantity:2},
        { "product" : "DVD", unitPrice : 25, quantity:1}
    ]

let totalQte = 0

for (let i=0;i<shoppingQte.length;i++) {
    totalQte += shoppingQte[i].unitPrice * shoppingQte[i].quantity
}

console.log("total du panier 1 qté : ", totalQte)

if(totalQte>60){
    console.log("frais de port gratuit")
}

let total2Qte = 0

for (let i=0;i<shoppingQte2.length;i++) {
    total2Qte += shoppingQte2[i].unitPrice * shoppingQte2[i].quantity
}

console.log("total du panier 2 qté : ", total2Qte)

if(total2Qte>60){
    console.log("frais de port gratuit")
}
        