
import CreateElement from '../utils/createElementTest.js'
import Accueil from '../utils/createAccueil.js'
import CreatePage from '../utils/createPage.js'

let $ = function (selector) {
    return document.querySelector(selector);
};

let page_creator = new CreatePage()
let element_creator = new CreateElement()
let p = new Accueil()

//API caméra
let url = "http://localhost:3000/api/cameras/"

function setAccueil(data) {
    for (let cam of data) {
        let tr = p.set_product(element_creator, cam)
        let list = $('#listedesproduits')
        list.appendChild(tr)
    }
}

async function getAccueil() {
    let response = await fetch(url)
    let data = await response.json()
    let page = await setAccueil(data)
    return page
}

// Crée la page produit a partir des données de l'API
function setProduit(data) {
    let div = page_creator.create_page_product(element_creator, data)
    $('#produit').append(div)

    let a = document.querySelector('#produit a')

    getPanier(a)
}

function setPanier(data) {
    let div = page_creator.create_page_panier(element_creator, data)
    $('#panier').append(div)
}

function getPanier(a) {
    a.addEventListener('click', async function (e) {
        e.stopPropagation()
        let num = a.getAttribute('data-panier')
        localStorage.setItem('ids', num)
        let getItem = localStorage.getItem('ids')

        let page = document.getElementsByTagName('a')
        let pageProduit = page[2]
        pageProduit.click()
        
        let test = $('#panier').getElementsByTagName('p')

        if(test.length < 2) {
            $('#panier').innerHTML = ''
        }

        let url = `http://localhost:3000/api/cameras/${getItem}`

        let response = await fetch(url)
        let data = await response.json()
        let produit = await setPanier(data)
    });
}

function add_products_listeners(links) {
    for (let link of links) {
        link.addEventListener('click', async function () {
            let num = this.getAttribute('data-button')
            localStorage.setItem('ids', num)
            let getItem = localStorage.getItem('ids')

            let page = document.getElementsByTagName('a')
            let pageProduit = page[1]
            pageProduit.click()

            $('#produit').innerHTML = ''

            let url = `http://localhost:3000/api/cameras/${getItem}`

            let response = await fetch(url)
            let data = await response.json()
            let produit = await setProduit(data)
        })
    }
}

// Mise en place des event listeners sur les liens de la home
// pour renvoyer sur la page produit
getAccueil().then(function () {
    let links = document.querySelectorAll('#listedesproduits a')

    let firstP = element_creator.createParagraphe('text-center--white', "Aucun produit n'a été sélectionné")
    $('#produit').append(firstP)

    let secondP = element_creator.createParagraphe('text-center--white', "Le panier est vide")
    $('#panier').append(secondP)

    // ajout des listeners produits
    add_products_listeners(links)

}).catch(err => console.log('Erreur' + err))




































