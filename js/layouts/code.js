import createElement from '../utils/createElement.js'
import getApi from '../utils/getApi.js'

let $ = function (selector) {
    return document.querySelector(selector);
};

//API caméra
let url = "http://localhost:3000/api/cameras/"


//Page Accueil
function setAccueil(data) {
    for (let cam of data) {
        let items = []
        let td1 = new createElement('w-25', 'data-tr', 'td', null, null, null).createTd()
        let td2 = new createElement('align-middle', 'data-td', 'td', null, null, `${cam.name}`).createTd()
        let td3 = new createElement('align-middle', 'data-td', 'td', null, null, `${cam.price}£`).createTd()
        let td4 = new createElement('align-middle', 'data-td', 'td', null, null, `${cam.description}`).createTd()
        let td5 = new createElement('align-middle', 'data-td', 'td', null, null, null).createTd()
        items.push(td1, td2, td3, td4, td5)

        let tr = new createElement('text-center', 'data-tr', 'tr')
        let list = $('#listedesproduits')
        tr = tr.createTr()
        list.appendChild(tr)

        for (let item of items) {
            tr.appendChild(item)
        }

        let img = new createElement('img-fluid img-thumbnail', null, null, null, null, null,`${cam.imageUrl}`, 'Appareil photo')
        td1.appendChild(img.createImg())

        let a = new createElement('btn btn-primary', 'data-button', `${cam._id}`, null, null, 'Détails', null, null, null, '#')
        td5.appendChild(a.createLink())
    }

}

// Appel page Accueil
async function getAccueil() {
    let response = await fetch(url)
    let data = await response.json()
    let page = await setAccueil(data)
    return page
}

//Page Produit
function setProduit(data) {
    //Elements crées
    let div1 = new createElement('card mt-3 mr-4 ml-4').createDiv2()
    let div2 = new createElement('row no-gutters').createDiv2()
    let div3 = new createElement('col-md-4').createDiv2()
    let img = new createElement('card-img', null, null, null, null, null, `${data.imageUrl}`, 'Appareil photo').createImg()
    let div3Bis = new createElement('col-md-8').createDiv2()
    let div4 = new createElement('card-body').createDiv2()
    let div5 = new createElement('card-body--title').createDiv2()
    let h5 = new createElement('card-title', null, null, null, null, `${data.name}`).createTitle()
    let p1 = new createElement('card-text', null, null, null, null, `${data.price}£`).createParagraphe()
    let p2 = new createElement('card-text', null, null, null, null, `${data.description}`).createParagraphe()
    let label = new createElement('card-text', 'for', 'lentilles',null, null, 'Lentilles : ').createLabel()
    let select = new createElement('lentilles', 'id', 'lentilles').createSelect()
    let option1 = new createElement(null, null, null, null, null, `${data.lenses[0]}`, null, null, `${data.lenses}`).createOption()
    let option2 = new createElement(null, null, null, null, null,`${data.lenses[1]}`, null, null, `${data.lenses}`).createOption()
    let option3 = new createElement(null, null, null, null, null, `${data.lenses[2]}`, null, null, `${data.lenses}`).createOption()
    let a = new createElement('btn btn-warning', null, null, 'data-panier', `${data._id}`, 'Ajouter au panier +', null, null, null, '#').createLink2()

    //Parents
    $('#produit').append(div1)
    div1.append(div2)
    div2.append(div3)
    div3.append(img)
    div2.append(div3Bis)
    div3Bis.append(div4)
    div4.append(div5)
    div5.append(h5)
    div5.append(a)
    div4.append(p1)
    div4.append(p2)
    div4.append(label)
    div4.append(select)
    select.append(option1)
    select.append(option2)
    select.append(option3)
}

//Appel page Produit
function getProduit() {
    getAccueil().then(function () {
        let links = document.querySelectorAll('#listedesproduits a')

        let p = new createElement('text-center', null, null, null, null, "Aucun produit n'a été sélectionné").createParagraphe()
        $('#produit').append(p)

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
                let pages = await setProduit(data)
                return pages
            })
        }
    }).catch(err => console.log('Erreur' + err))
}

getProduit()