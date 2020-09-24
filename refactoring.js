let $ = function (selector) {
    return document.querySelector(selector);
};

//API caméra
let url = "http://localhost:3000/api/cameras/"
//

//Création <tr></tr>
function createTr(className, name, value) {
    tr = document.createElement('tr')
    tr.className = className
    tr.setAttribute(name, value)
    return tr
}
//

//Création <td></td>
function createTd(className, name, value, text) {
    let td = document.createElement('td')
    td.className = className
    td.setAttribute(name, value)
    if (text !== false) {
        td.innerHTML = text
    }
    return td
}
//

//création <img></img>
function createImg(className, src) {
    let img = document.createElement('img')
    img.className = className
    img.src = src
    return img
}
//

//Création <a></a>
function createLink(className, role, button, ariaPressed, valueAriaPressed, dataButton, id, text) {
    let a = document.createElement('a')
    a.className = className
    a.setAttribute(role, button)
    a.setAttribute(ariaPressed, valueAriaPressed)
    a.setAttribute(dataButton, id)
    a.innerHTML = text
    return a
}
//

//Création <div></div>
function createDiv(className, style, width) {
    let div = document.createElement('div')
    div.className = className
    div.setAttribute(style, width)
}

//Ajoute pour chaque enfant un parent
function appendChildren(parent, children) {
    children.forEach(function (child) {
        parent.append(child)
    })
}
//

//Page Accueil
function setAccueil(data) {
    for (let cam of data) {
        //Tableau de 5 balises <td></td>
        let items = [
            createTd('w-25', 'data-tr', 'td', false),
            createTd('align-middle', 'data-td', 'td', `${cam.name}`),
            createTd('align-middle', 'data-td', 'td', `${cam.price}£`),
            createTd('align-middle', 'data-td', 'td', `${cam.description}`),
            createTd('align-middle', 'data-td', 'td', false)
        ]
        let myList = $('#listedesproduits')
        myList.appendChild(createTr('text-center', 'data-tr', 'tr'))

        appendChildren(tr, items)
        items[0].appendChild(createImg('img-fluid img-thumbnail', `${cam.imageUrl}`))
        items[4].appendChild(createLink('btn btn-primary', 'role', 'button', 'aria-pressed', 'true', 'data-button', `${cam._id}`, 'Détails'))
    }
}
//

//Appel page Accueil
async function getAccueil() {
    let response = await fetch(url)
    let data = await response.json()
    let items = await setAccueil(data)
    return items
}
//

//Appel page Produit
function getProduit() {
    getAccueil().then(function () {
        let links = document.querySelectorAll('#listedesproduits a')

        for (let link of links) {
            link.addEventListener('click', async function () {
                let num = this.getAttribute('data-button')
                localStorage.setItem('ids', num)
                let getItem = localStorage.getItem('ids')

                let page = document.getElementsByTagName('a')
                let pageProduit = page[1]
                pageProduit.click()

                let url = `http://localhost:3000/api/cameras/${getItem}`

                let response = await fetch(url)
                let data = await response.json()
                let items = await setAccueil(data)
                return items
            })
        }
    }).catch(err => console.log('Erreur' + err))
}

getProduit()






