import CreateElement from '../utils/createElement.js'
import Accueil from '../utils/createAccueil.js'
import CreatePage from '../utils/createPage.js'
// import Panier from '../utils/createBasket.js'
import Panier from '../utils/test.js'

let $ = function (selector) {
    return document.querySelector(selector);
};

let page_creator = new CreatePage()
let element_creator = new CreateElement()
let page_accueil = new Accueil()
let panier = new Panier()



//API caméra
let url = "http://localhost:3000/api/cameras/"

function setAccueil(data) {
    for (let cam of data) {
        let tr = page_accueil.set_product(element_creator, cam)
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
    let tr = page_creator.create_page_product(element_creator, data)
    $('#produit').append(tr)

    let a = document.querySelector('#produit a')

    getPanier(a)
}

function setPanier(data) {
    let div = page_creator.create_page_panier(element_creator, data)
    if (div !== null) {
        $('#panier').append(div)
    }

    panier.addProduct(data)

    quantityProduct()
    let product = panier.getBasketStorage()
    $(`.js-card-${data._id}`).innerHTML = product.number
    $('#price').innerHTML = product.total
}

//Mise en place des events listeners sur les liens de la page produit
//pour envoyer la page panier
function getPanier(a) {
    a.addEventListener('click', async function (e) {
        e.stopPropagation()
        let num = a.getAttribute('data-panier')
        localStorage.setItem('ids', num)
        let getItem = localStorage.getItem('ids')

        let page = document.getElementsByTagName('a')
        let pageProduit = page[2]
        pageProduit.click()

        let panierVide = document.querySelectorAll('#panier p.text-center--white')

        if (panierVide.length == 1) {
            $('#panier').innerHTML = ''
        }

        let url = `http://localhost:3000/api/cameras/${getItem}`

        let response = await fetch(url)
        let data = await response.json()
        let panier = await setPanier(data)
        return panier
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
            return produit
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

    let thirdP = element_creator.createParagraphe('text-center--white', "Aucune commande effectuée")
    $('#commande').append(thirdP)

    // ajout des listeners produits
    add_products_listeners(links)

}).catch(err => console.log('Erreur' + err))


let form = document.getElementById('inscription')

form.addEventListener('submit', async function (e) {
    e.preventDefault()
    let products = page_creator.productsOfPanier()
    let formData = new FormData(this)
    let contact = {}

    for (let [key, value] of formData) {
        contact[key] = value
    }

    let response = await fetch('http://localhost:3000/api/cameras/order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ contact, products })
    })
    if (response.ok) {
        let responseData = await response.json()
        console.log(responseData)

        let page = document.getElementsByTagName('a')
        let pageProduit = page[3]
        pageProduit.click()

        let panierVide = document.querySelectorAll('#commande p.text-center--white')

        if (panierVide.length == 1) {
            $('#commande').innerHTML = ''
        }

        let total = $('#price').innerHTML

        let div = page_creator.createPageCommande(element_creator, responseData, total)
        $('#commande').append(div)
    }
})

function quantityProduct() {
    let btnsOfQuantity = document.querySelectorAll('.js-quantity')

    for (let btnOfQuantity of btnsOfQuantity) {
        btnOfQuantity.addEventListener('click', function (e) {
            e.preventDefault()
            let operation = this.getAttribute('data-quantity')
            let id = this.getAttribute('data-id')
            panier.updateProductQuantity(id, operation)
        })
    }
}





































