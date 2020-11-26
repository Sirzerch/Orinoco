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
//Réalise un appel API pour créer la page ACCUEIL
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

//Récupère l'id du produit lors de l'event "click" puis réalise un appel API pour créer la page PRODUIT
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
    let btnOfQuantity = null
    if (div !== null) {
        $('#panier').append(div)
        btnOfQuantity = document.querySelector(`.js-quantity-${data._id}`)
        quantityProduct(btnOfQuantity)
    }

    createBasketQuantity.addProduct(data)

    let product = createBasketQuantity.getBasketStorage()
    $(`.js-card-${data._id}`).innerHTML = product.number
    $('#price').innerHTML = product.total

}

//Récupère l'id du produit lors de l'event "click" puis réalise un appel API pour créer la page PANIER
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
    });
}

//Diminue ou augmente la quantité du produit sélectionné lors de l'event "click"
function quantityProduct(btnOfQuantity) {
    btnOfQuantity.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        if (e.target !== e.currentTarget) {
            let operation = e.target.getAttribute('data-quantity')
            let id = e.target.getAttribute('data-id')
            createBasketQuantity.updateProductQuantity(id, operation)
            let product = createBasketQuantity.getBasketStorage()
            $(`.js-card-${id}`).innerHTML = product.number
            $('#price').innerHTML = product.total
        }
    })
}


//Si la response a le statut 200, récupère les données du formulaire pour créer la page COMMANDE
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
document.forms['inscription'].addEventListener('submit', async function (e) {
    e.preventDefault()
    let inputs = this
    let error
    
    //Si le firstName oue le secondName contient un chiffre alors il y a une erreur 
    if(/[0-9]/.test(inputs['firstName'].value) || /[0-9]/.test(inputs['lastName'].value)) {
        error = 'Veuillez ne saisir que des lettres.'
    }

    for(var i = 0; i < inputs.length; i++) {
        if(!inputs[i].value) {
            error = "Veuillez renseigner tous les champs";
        }
    }

    if(error) {
        document.getElementById('error').innerHTML = error
    } else {
        let products = createPage.allId()
        let formData = new FormData(inputs)
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
    }
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








































