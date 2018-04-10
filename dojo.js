console.dir(document)
const mainDiv = document.getElementById("main")

const accueilHTML = `
        <h1>Accueil</h1> 
        <a href="about.html">About</a><br>
        <a href="#" onclick="">Hello World !</a>`


const aboutHTML = `
        <h1>About</h1> 
        <a href="index.html">Accueil</a>`

const headerHTML = `
<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
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
            <a class="nav-link" href="#">Link</a>
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
    </nav>
`

const footerHTML = `
<footer class="footer">
      <div class="container">
        <span class="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>`



// mainDiv.innerHTML = headerHTML + aboutHTML + footerHTML

function genererPage(html){
  return headerHTML + html + footerHTML
}
mainDiv.innerHTML = genererPage(accueilHTML)

const liens = document.getElementsByTagName("a")
console.dir(liens[4])

const lienAbout = liens[4]
lienAbout.addEventListener('click', function(event){
  event.preventDefault()
  mainDiv.innerHTML = genererPage(aboutHTML)
})



