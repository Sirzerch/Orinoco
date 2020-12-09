let $ = function (selector) {
    return document.querySelector(selector)
}

//Balise contenant la barre de navigation 
let contentHeaderNav = $('#js-header__nav')
let burgerSidebarBody = $('#js-burger-sidebar-body')
let burgerButton = $('#js-burger-button')
let burgerOverlay = $('#js-burger-overlay')
let activatedBurger = 'burger-activated'
//Cible la barre de navigation
let nav = contentHeaderNav.childNodes[1]

//Système d'onglets affichant le contenu de la page correspondant au "click" de l'utilisateur
let navOngletsPages = function () {
    let links = document.querySelectorAll('#pages .header__nav a')

    for (let link of links) {
        link.addEventListener('click', function (e) {
            let num = this.getAttribute('data-pages')

            $('#pages div.active').classList.remove('active')
            $('#page' + num).classList.add('active')
            $('#pages .header__nav a.active').classList.remove('active')
            this.classList.add('active')
            closeBurger(e)
        })
    }
}
navOngletsPages()

//Rajoute la classe 'burger-activated' pour ouvrir la sidebar
let openBurger = function (e) {
    e.preventDefault()
    //Gère l'animation du bouton burger
    burgerButton.classList.toggle('actived')
    $('#burger-menu').classList.add(activatedBurger)
    navOngletsPages()
    burgerButton.addEventListener('click', closeBurger)
}

//Enlève la classe 'burger-activated' et ferme la sidebar
let closeBurger = function (e) {
    if ($('.burger-activated')) {
        e.preventDefault()
        //Gère l'animation du burger
        burgerButton.classList.remove('actived')
        $('#burger-menu').classList.remove(activatedBurger)
        navOngletsPages()
        burgerButton.removeEventListener('click', closeBurger)
    }
}
burgerButton.addEventListener('click', openBurger)


//Ajoute le contenu de la barre de navigation dans la sidebar
burgerSidebarBody.innerHTML = contentHeaderNav.innerHTML

//Fait Office de média Queries pour la barre de navigation
function onResize() {
    //Si la largeur est inférieur à 750 alors :
    if(window.innerWidth < 750) {
        //On enlève la barre de navigation pour grand écran 
        nav.remove(nav)

    }else { //Sinon on ajoute le contenu de la sidebar dans la barre de navigation 
        contentHeaderNav.innerHTML = burgerSidebarBody.innerHTML
        navOngletsPages()
    }
}
window.onresize = onResize





