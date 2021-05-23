/* function afficherNounoursNameParagraphe() {
    return fetch('https://oc-p5-api.herokuapp.com/api/teddies')
    .then((response) => response.json())
    .then((nounourses) => {
        for (let elem of nounourses) {
            nounours = elem.name;
            document.createTextNode(document.getElementById("nounours_name").innerHTML += "<p>" + nounours + "</p>");
        }
    })
}
afficherNounoursNameParagraphe() */

/* function afficherDivAvecNomEtPrixNounours() {
    return fetch('https://oc-p5-api.herokuapp.com/api/teddies')
    .then((response) => response.json())
    .then((nounourses) => {
        for (let elem of nounourses) {
            nounours = elem.name;
            nounoursPrice = (elem.price/200);
            document.createTextNode(document.getElementById("nounours_infos").innerHTML += "<div>" + nounours +" "+ nounoursPrice +"€</div>");
        }
    })
}
afficherDivAvecNomEtPrixNounours() */

/* for (i=0; i<nounourses.lenght; i++) {
    var para = document.createElement("div");
    var txt = document.createTextNode(document.getElementById("nounours_infos").innerHTML += "<div>" + nounours +" "+ nounoursPrice +"€</div>");
    para.appendChild(txt);
} */

function afficherNounoursNameParagraphe() {
    return fetch('https://oc-p5-api.herokuapp.com/api/teddies')
    .then((response) => response.json())
    .then((nounourses) => {
        for (let elem of nounourses) {
            nounours = elem.name;
            let para = document.createElement("p");
            let div = document.getElementById("nounours_name");
            div.appendChild(para);
            para.append(nounours);
        }
    })
}
//afficherNounoursNameParagraphe()

function afficherDivAvecNomEtPrixNounours() {
    return fetch('https://oc-p5-api.herokuapp.com/api/teddies')
    .then((response) => response.json())
    .then((nounourses) => {
        for (let elem of nounourses) {
            nounours = elem.name;
            nounoursPrice = (elem.price/200)
            let para = document.createElement("p");
            let div = document.getElementById("nounours_infos");
            div.appendChild(para);
            para.append(nounours + " " + nounoursPrice);
        }
    })
}
//afficherDivAvecNomEtPrixNounours()

function afficherPhotoDesNounours() {
    return fetch('https://oc-p5-api.herokuapp.com/api/teddies')
    .then((response) => response.json())
    .then((nounourses) => {
        for (let elem of nounourses) {
            nounoursImg = elem.imageUrl;
            let img = document.createElement("img");
            img.src = nounoursImg;
            let div = document.getElementById("nounours_img");
            div.appendChild(img);
        }
    })
}
//afficherPhotoDesNounours()

/* function afficherLeToutSousFormeDeDivisions() {
    return fetch('https://oc-p5-api.herokuapp.com/api/teddies')
    .then((response) => response.json())
    .then((nounourses) => {
        for (let elem of nounourses) {
            nounours = elem.name;
            nounoursPrice = (elem.price/200);
            let div = document.getElementById("nounours_infos");
            let para = document.createElement("p");
            div.appendChild(para);
            para.append(nounours + " " + nounoursPrice+ "€");
            let img = document.createElement("img");
            nounoursImg = elem.imageUrl;
            img.src = nounoursImg;
            div.appendChild(img);
            let btn= document.createElement("button");
            let txtBtn= document.createTextNode("Voir produit");
            btn.appendChild(txtBtn);
            div.appendChild(btn);
        }
    })
}
afficherLeToutSousFormeDeDivisions() */

function afficherLeToutSousFormeDeDivisions() {
    fetch('https://oc-p5-api.herokuapp.com/api/teddies')
    .then((response) => response.json())
    .then((nounourses) => {
        for (let elem of nounourses) {
            nounours = elem.name;
            nounoursPrice = (elem.price/200);
            nounoursId= elem._id
            let div = document.getElementById("produit");
            let div2 = document.createElement("div")
            div.appendChild(div2);
            let img = document.createElement("img");
            nounoursImg = elem.imageUrl;
            img.src = nounoursImg;
            div2.appendChild(img);
            let para = document.createElement("p");
            div2.appendChild(para);
            para.append(nounours + " : " + nounoursPrice+ "€");
            let btn= document.createElement("button");
            btn.onclick = function clic() {
                location.href = "produits.html?product="+ elem._id;
            }
            let txtBtn= document.createTextNode("Voir produit");
            btn.appendChild(txtBtn);
            div2.appendChild(btn);
        }
    })
}
afficherLeToutSousFormeDeDivisions()
