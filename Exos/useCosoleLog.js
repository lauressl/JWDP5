const list = [
    {name: 'coucou', price: 12},
    {name: 'kiki', price: 200},
    {name: 'bouh', price: 50},
]

function affichePrenomDeLaListe(liste){
    for (let elem of liste) {
        console.log(`Le nounours ${elem.name} est à ${elem.price}€`)
    }
}

affichePrenomDeLaListe(list)