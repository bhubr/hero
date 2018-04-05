const targetElement = document.getElementById('main')

// Requête une URL pour récupérer UN héros
fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/10.json')
.then(response => response.json())
.then(hero => {

  // C'EST LA QUE SE PASSENT LES CHOSES INTERESSANTES !
  // Le paramètre hero contient l'objet reçu, décodé à partir du JSON.
	console.log(hero)

  // On va construire du HTML à partir de ces données
  // Par exemple, hero a des propriétés :
  //   - name qui contient le nom du super héros
  //   - work qui contient à son tour deux propriétés base et occupation
  //   - images qui contient à son tour quatre propriétés lg, md, sm, xs
  //     (des URLs vers des images)

  const html = `
    <h2>${hero.name}</h2>
    <img alt="${hero.name}'s photo" src="${hero.images.md}" />
    <p><strong>Occupation:</strong> ${hero.work.occupation}</p>
    `
  targetElement.innerHTML = html
})