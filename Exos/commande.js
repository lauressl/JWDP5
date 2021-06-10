function sendData(data) {
    var XHR = new XMLHttpRequest();
    var FD  = new FormData();
  
    // Mettez les données dans l'objet FormData
    for(firstName in data) {
        FD.append(firstName, data[firstName]);
    }
    for(lastName in data) {
        FD.append(lastName, data[lastName]);
    }
  
    // Définissez ce qui se passe si la soumission s'est opérée avec succès
    XHR.addEventListener('load', function(event) {
      alert('Ouais ! Données envoyées et réponse chargée.');
    });
  
    // Definissez ce qui se passe en cas d'erreur
    XHR.addEventListener('error', function(event) {
      alert('Oups! Quelque chose s\'est mal passé.');
    });
  
    // Configurez la requête
    XHR.open('POST', 'https://oc-p5-api.herokuapp.com/api/teddies/order');
  
    // Expédiez l'objet FormData ; les en-têtes HTTP sont automatiquement définies
    XHR.send(FD);
  }