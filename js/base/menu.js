let $ = function (selector) {
    return document.querySelector(selector)
}

let contentHeaderNav = $('#js-header__nav')
let burgerSidebarBody = $('#js-burger-sidebar-body')
let burgerButton = $('#js-burger-button')
let burgerOverlay = $('#js-burger-overlay')
let activatedBurger = 'burger-activated'

//Système d'onglets affichant le contenu de la page correspondant au "click" de l'utilisateur
let navOngletsPages = function() {
    let pages = document.querySelectorAll('#pages .header__nav a')

    for(let page of pages) {
        page.addEventListener('click', function(e){
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


//Ajoute le contenu de la barre de navigation dans la sidebar
burgerSidebarBody.innerHTML = contentHeaderNav.innerHTML 

//Rajoute la classe 'burger-activated' pour activer la sidebar
let openBurger = function (e) {
    e.preventDefault()
    $('#burger-menu').classList.add(activatedBurger)
    navOngletsPages()
    burgerButton.addEventListener('click', closeBurger)
}

//Enlève la classe 'burger-activated' et ferme la sidebar
let closeBurger = function(e) {
    if($('.burger-activated')) {
        e.preventDefault()
        $('#burger-menu').classList.remove(activatedBurger)
        burgerButton.removeEventListener('click', closeBurger)
    }
}

burgerButton.addEventListener('click', openBurger)




