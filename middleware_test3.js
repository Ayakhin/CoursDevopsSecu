const express = require('express')
const app = express()
const port = 3000

let publicUrls = [
    '/url1',
    '/url2',
    '/login'
]

// Middleware pour gérer l'authentification
function myMiddleware(req, res, next) {
    // Vérifier si l'URL demandée est publique
    if (publicUrls.includes(req.path)) {
        next(); // Si oui, passer au middleware suivant
    } else {
        // Sinon, vérifier si l'utilisateur est authentifié
        const token = req.headers.authorization; // Supposons que le token est envoyé dans le header Authorization

        if (token === 'monTokenSecret') { // Vérifiez si le token est valide
            next(); // Si oui, passer au middleware suivant
        } else {
            // Si l'utilisateur n'est pas authentifié, renvoyer une erreur 403
            res.status(403).send('Accès refusé');
        }
    }
}

app.use(myMiddleware);

// Route pour la connexion
app.get('/login', (req, res) => {
    res.json({ token: 'monTokenSecret' }); // Vous devez générer un token unique et l'envoyer au client
});

// Routes publiques
app.get('/url1', (req, res) => {
    res.send('Hello World from url1!');
});

app.get('/url2', (req, res) => {
    res.send('Hello World from url2!');
});

// Route privée
app.get('/private/url1', (req, res) => {
    res.send('Hello it is secret');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
