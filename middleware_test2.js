const express = require('express');
const app = express();

// Middleware loggerMiddleware pour afficher "Nouvelle requête entrante"
function loggerMiddleware(request, response, next) {
    console.log("Nouvelle requête entrante");
    next();
}

// Middleware json pour parser les corps de requête en JSON
app.use(express.json());

// Ajouter le middleware loggerMiddleware avant le middleware json
app.use(loggerMiddleware);

// Définir une route pour tester la réception de données POST
app.get('/test', (request, response) => {
    console.log("Contenu de la requête :", request.body);
    response.send('Requête GET reçue avec succès');
});

// Lancer le serveur sur le port 3000
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
