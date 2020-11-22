//Import des classes
import CreateElement from './class/createElement.js'
import CreatePage from './class/createPage.js'
import CreateBasketQuantity from './class/createBasketQuantity.js'

let $ = function (selector) {
    return document.querySelector(selector);
};

let createElement = new CreateElement()
let createPage = new CreatePage(createElement)
let createBasketQuantity = new CreateBasketQuantity()


//API caméra
const url = "http://localhost:3000/api/cameras/"

//Formate la page ACCUEIL
function formatAccueil(data) {
    for (let cam of data) {
        let tr = createPage.createProductOfHome(cam)
        let list = $('#listedesproduits')
        list.appendChild(tr)
    }
}
//Récupérer les données de l'API pour la page ACCUEIL
async function getDataAccueil() {
    let response = await fetch(url)
    let data = await response.json()
    let page = await formatAccueil(data)
    return page

}

//Formate la page PRODUIT
function formatProduit(data) {
    let tr = createPage.createProductOfProduct(data)
    $('#produit').append(tr)

    let a = document.querySelector('#produit a')

    getDataPanier(a)
}

//Récupère les données de l'API lors de l'event "click" pour la page PRODUIT
function getDataProduit(links) {
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
            let produit = await formatProduit(data)
            return produit
        })
    }
}

//Formate la page PANIER
function FormatPanier(data) {
    let div = createPage.createProductOfBasket(data)
    if (div !== null) {
        $('#panier').append(div)
    }

    console.log(createBasketQuantity.addProduct(data))

    quantityProduct()
    let product = createBasketQuantity.getBasketStorage()
    $(`.js-card-${data._id}`).innerHTML = product.number
    $('#price').innerHTML = product.total
}

//Récupère les données de l'API lors de l'event "click" pour la page PANIER
function getDataPanier(a) {
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
        let panier = await FormatPanier(data)
        return panier
    });
}

//Diminue ou augmente la quantité du produit lors de l'event "click" des boutons "+" ou "-"
function quantityProduct() {
    let btnsOfQuantity = document.querySelectorAll('.js-quantity')

    for (let btnOfQuantity of btnsOfQuantity) {
        let onClick = function (e) {
            e.preventDefault()
            let operation = this.getAttribute('data-quantity')
            let id = this.getAttribute('data-id')
            console.log(createBasketQuantity.updateProductQuantity(id, operation))
            let product = createBasketQuantity.getBasketStorage()
            $(`.js-card-${id}`).innerHTML = product.number
            $('#price').innerHTML = product.total
            // btnOfQuantity.removeEventListener('click', onClick)
        }
        btnOfQuantity.addEventListener('click', onClick, false)
    }
}

//Récupère les données du formulaire, si la response a le statut 200, et créer la page COMMANDE
async function getDataCommande(response) {
    if (response.ok) {
        let responseData = await response.json()

        let page = document.getElementsByTagName('a')
        let pageProduit = page[3]
        pageProduit.click()

        let panierVide = document.querySelectorAll('#commande p.text-center--white')

        if (panierVide.length == 1) {
            $('#commande').innerHTML = ''
        }

        let total = $('#price').innerHTML

        let div = createPage.createPageCommande(responseData, total)
        $('#commande').append(div)
    }
}

//Envoie les données saisis du formulaire lors de l'event "click"
let form = document.getElementById('inscription')
form.addEventListener('submit', async function (e) {
    e.preventDefault()
    let products = createPage.allId()
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
    getDataCommande(response)
})

//Création du HTML des pages du site lors du chargement de l'ACCUEIL
getDataAccueil().then(function () {
    let links = document.querySelectorAll('#listedesproduits a')

    let firstP = createElement.createParagraphe('text-center--white', "Aucun produit n'a été sélectionné")
    $('#produit').append(firstP)

    let secondP = createElement.createParagraphe('text-center--white', "Le panier est vide")
    $('#panier').append(secondP)

    let thirdP = createElement.createParagraphe('text-center--white', "Aucune commande effectuée")
    $('#commande').append(thirdP)

    // ajout des listeners produits
    getDataProduit(links)

}).catch(err => console.log('Erreur' + err))








































