const nounourses = [
    {
    "colors": ["Tan", "Chocolate", "Black", "White"],
    "_id": "5be9c8541c9d440000665243",
    "name": "Norbert",
    "price": 2900,
    "imageUrl": "teddy_1.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
    "colors": [
        "Pale brown",
        "Dark brown",
        "White"
    ],
    "_id": "5beaa8bf1c9d440000a57d94",
    "name": "Arnold",
    "price": 3900,
    "imageUrl": "teddy_2.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
    "colors": [
        "Brown"
    ],
    "_id": "5beaaa8f1c9d440000a57d95",
    "name": "Lenny and Carl",
    "price": 5900,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "teddy_3.jpg"
    },
    {
    "colors": [
        "Brown",
        "Blue",
        "Pink"
    ],
    "_id": "5beaabe91c9d440000a57d96",
    "name": "Gustav",
    "price": 4500,
    "imageUrl": "teddy_4.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
    "colors": [
        "Beige",
        "Tan",
        "Chocolate"
    ],
    "_id": "5beaacd41c9d440000a57d97",
    "name": "Garfunkel",
    "price": 5500,
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "imageUrl": "teddy_5.jpg"
    }
];

function afficherNomDesNounours(array){
    for (let elem of array) {
        console.log(elem.name)
    }
}
//afficherNomDesNounours(nounourses)

function afficherPrixTotal(array){
    var sum= 0;
    for (let elem of array){
        sum+= parseInt(elem.price);
    }
    return(sum);
}
//console.log(afficherPrixTotal(nounourses));

function afficherMoitiePrix(array){
    var fifty= 0;
    for (let elem of array){
        fifty= (parseInt(elem.price)/200);
        console.log(`Le nounours ${elem.name} à - 50% est à ${fifty}€`);
    }
}
//afficherMoitiePrix(nounourses)

function afficherColorisDisponibles(array){
    for (let elem of array){
        let color= elem.colors;
        let colorNumber= color.length;
        console.log(` ${elem.name} est disponible en ${colorNumber} couleurs`);
    }
}
//afficherColorisDisponibles(nounourses)

function afficherSuperieurTrente(array){
    for (let elem of array){
        if ((elem.price/100) > 30){
            console.log(` ${elem.name} coûte + de 30€ (il coûte ${elem.price/100}€)`);
        }
    }
}
//afficherSuperieurTrente(nounourses)

function afficherSommeDescriptions(array){
    var sum= 0;
    for (let elem of array){
        sum+= (elem.description);
    }
    return(sum);
}
//console.log(afficherSommeDescriptions(nounourses))