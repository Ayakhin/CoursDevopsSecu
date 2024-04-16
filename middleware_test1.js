// Importation des dépendances
const express = require('express');

// Création de l'application Express
const app = express();

// Définition du middleware loggerMiddleware
function loggerMiddleware(request, response, next) {
    console.log("Nouvelle requête entrante");
    next(); // Appel de la fonction next pour passer au middleware suivant
}

// Utilisation du middleware avec app.use pour qu'il soit exécuté à chaque nouvelle requête entrante
app.use(loggerMiddleware);

// Route d'exemple
app.get('/', (req, res) => {
    res.send('Bonjour, monde!');
});

// Lancement du serveur sur le port 3000
app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
});
