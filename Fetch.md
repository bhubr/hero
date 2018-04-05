# Requête HTTP avec Fetch

Dans les applis qu'on va programmer en JS côté navigateur, on aura souvent besoin d'aller lire des données sur un serveur.

Le serveur va le plus souvent nous renvoyer des données en JSON. Quand la requête de données est terminée, le JSON est converti en tableau ou objet JavaScript, et on peut le manipuler.

Comment faire une requête ? Avec Fetch. Fetch est désormais standard dans les navigateurs. Voici comment lancer une requête avec Fetch...

> **Très important**, ne cherche pas à comprendre tous les détails dès maintenant. Contente toi d'utiliser fetch.

> L'exemple ci-dessous effectue das appels à une API permettant de générer
> des faux utilisateurs de façon aléatoire.

```javascript
fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/10.json', {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {

  // C'EST LA QUE SE PASSENT LES CHOSES INTERESSANTES !
  // Le paramètre data contient l'objet reçu, décodé à partir du JSON.
	console.log(data)	
})
```

Pour répondre à la question légitime "que faire avec les données de l'API", rends-toi sur la section suivante, sur la [création de HTML](Creation-de-HTML.md) dans le navigateur web.