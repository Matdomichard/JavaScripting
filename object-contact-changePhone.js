var contacts = [
    {
        prenom : 'john',
        telephone : '0611223344',
    },
    {
        prenom : 'elise',
        telephone : '0655667799'
    },
    {
        prenom : 'franck',
        telephone : '0612345678'
    },
    {
        prenom : 'elise',
        telephone : '0612345678'
    }
]

var tabFinal = []

for(var i=0;i<contacts.length;i++){
    contacts[i].telephone = '+33'+ contacts[i].telephone.substr(1)
    
    // Faire en sorte que John soit admin, les autres non.
    contacts[i].admin = false
    if(contacts[i].prenom === 'john'){
        contacts[i].admin = true
    }

    //Modifiez votre tableau pour supprimer les doublons de numéro de téléphone.
    const found = tabFinal.find(element => element.telephone === contacts[i].telephone);
    if (found === undefined){
        tabFinal.push(contacts[i])
    }
    
}

console.log(tabFinal)