/* function getContent() {
    let itemName = window.localStorage.getItem('name');
    let itemPrice = window.localStorage.getItem('price');
    let itemColor = window.localStorage.getItem('color');
    let addCart = document.getElementById("cart_tablebody");
    let para = document.createElement("td");
    let para2 = document.createElement("td");
    let para3 = document.createElement("td");
    addCart.appendChild(para);
    addCart.appendChild(para2);
    addCart.appendChild(para3);
    para.append(itemName);
    para2.append(itemPrice);
    para3.append(itemColor);
}

getContent(); */

/* function getContent() {
    let infosNorbert = window.localStorage.getItem(`Norbert`);
    let stockNorbert= JSON.parse(infosNorbert);
    console.log(stockNorbert);
    let infosArnold  = window.localStorage.getItem(`Arnold`);
    let stockArnold = JSON.parse(infosArnold);
    console.log(stockArnold);
    let infosLennyandCarl = window.localStorage.getItem(`Lenny and Carl`);
    let stockLennyandCarl= JSON.parse(infosLennyandCarl);
    console.log(stockLennyandCarl);
    let infosGustav = window.localStorage.getItem(`Gustav`);
    let stockGustav= JSON.parse(infosGustav);
    console.log(stockGustav);
    let infosGarfunkel = window.localStorage.getItem(`Garfunkel`);
    let stockGarfunkel= JSON.parse(infosGarfunkel);
    console.log(stockGarfunkel);
    /*console.log(itemStock[0]);
    console.log(itemStock[1]);
    console.log(itemStock[2]);
}

getContent();

function addToCart(){
    let cartInfos = [infosNorbert, infosArnold, infosLennyandCarl, infosGustav, infosGarfunkel];
    console.log(cartInfos);
} */

 /* let addName = document.getElementById("cart_tablebody");
        let cartLine = document.createElement("tr");
        cartLine.setAttribute("id",itemName);
        addName.appendChild(cartLine);
        cartLine.append(itemName); */
        
       /*  const itemInfos = JSON.parse(localStorage.getItem(itemName));
        console.log(itemInfos);

        let itemPrice=itemInfos[i].price;
        console.log(itemPrice);
        let addPrice = document.getElementById(`${itemName}`);
        let cartLinePrice = document.createElement("td");
        addPrice.appendChild(cartLinePrice);
        cartLinePrice.append(itemPrice);

        let itemColor=itemInfos[i].colorValue;
        console.log(itemColor);
        let addColor = document.getElementById(`${itemName}`);
        let cartLineColor = document.createElement("td");
        addColor.appendChild(cartLineColor);
        cartLineColor.append(itemColor); */

        //const itemInfosValues = itemInfos.values();
  
        /* for (const infos of itemInfosValues) {
            console.log(infos);
            let itemPrice=infos[0].price;
            let itemColor=infos[0].colorValue;
            console.log(itemPrice);
            console.log(itemColor);
            } */

function afficherProduitsMemeType (name, infos){
    for (let nounours of infos){
        console.log(`Le nounours ${name} a été commandé en ${nounours.colorValue} et coûte ${nounours.price}`);
    }
}

function forEachProduct() {
    for (var i = 0; i < localStorage.length; i++) {
        let itemName=localStorage.key(i);
        //console.log(itemName);
       
        const itemsInfos = JSON.parse(localStorage.getItem(`${itemName}`));
        console.log(itemsInfos);

        afficherProduitsMemeType(itemName, itemsInfos);
        //affiche tous les produits commandés du meme type
    }  
}
forEachProduct();
