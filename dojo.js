"use strict"

const homeHtml = `<h1>Exemple de création de HTML à partir de l'API</h1>
        <a href="/about">About</a>
        <a href="#" onclick="alert('hello')">Hello</a>`
const aboutHtml = `<h1>About</h1>
        <a href="index.html">Accueil</a>
      `
const profileHtml = `<h1>Profile</h1>
        <a href="index.html">Accueil</a>
      `
const navbar = `<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a class="navbar-brand" href="#">Top navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/profile">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline mt-2 mt-md-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>`
const mainDiv = document.getElementById('main')
console.dir(mainDiv)


mainDiv.innerHTML = navbar + homeHtml
const links = document.getElementsByTagName('a')

for (let link of links) {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const urlCible = event.target.href
    const elementsUrl = urlCible.split('/')
    console.log(urlCible, elementsUrl)
    const chemin = elementsUrl.pop()
    if(chemin === 'about') {
      mainDiv.innerHTML = navbar + aboutHtml
    }
    else if (chemin === 'profile') {
      mainDiv.innerHTML =  navbar + profileHtml
    }
  })
}

