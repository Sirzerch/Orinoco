import createElement from './createElement.js'

let $ = function (selector) {
    return document.querySelector(selector);
};

//API caméra
let url = "http://localhost:3000/api/cameras/"


//Page Accueil
function setAccueil(data) {
    for (let cam of data) {
        let items = []
        let td1 = new createElement('w-25', 'data-tr', 'td', null).createTd()
        let td2 = new createElement('align-middle', 'data-td', 'td', `${cam.name}`).createTd()
        let td3 = new createElement('align-middle', 'data-td', 'td', `${cam.price}£`).createTd()
        let td4 = new createElement('align-middle', 'data-td', 'td', `${cam.description}`).createTd()
        let td5 = new createElement('align-middle', 'data-td', 'td', null).createTd()
        items.push(td1, td2, td3, td4, td5)

        let tr = new createElement('text-center', 'data-tr', 'tr', null)
        let list = $('#listedesproduits')
        tr = tr.createTr()
        list.appendChild(tr)

        for (let item of items) {
            tr.appendChild(item)
        }

        let img = new createElement('img-fluid img-thumbnail', null, null, null, `${cam.imageUrl}`, 'Appareil photo')
        td1.appendChild(img.createImg())

        let a = new createElement('btn btn-primary', 'data-button', `${cam._id}`, 'Détails', null, null, null, '#')
        td5.appendChild(a.createLink())
    }

}

//Appel page Accueil
async function getAccueil() {
    let response = await fetch(url)
    let data = await response.json()
    let page = await setAccueil(data)
    return page
}

//Page Produit
function setProduit(data) {
    let div1 = new createElement('card mt-3 mr-4 ml-4', 'style', 'max-width: 5000px;').createDiv()
    $('#produit').append(div1)

    let div2 = new createElement('row no-gutters').createDiv2()
    div1.append(div2)

    let div3 = new createElement('col-md-4').createDiv2()
    div2.append(div3)

    let img = new createElement('card-img', null, null, null, `${data.imageUrl}`, 'Appareil photo').createImg()
    div3.append(img)

    let div3Bis = new createElement('col-md-8').createDiv2()
    div2.append(div3Bis)

    let div4 = new createElement('card-body').createDiv2()
    div3Bis.append(div4)

    let h5 = new createElement('card-title', null, null, `${data.name}`).createTitle()
    div4.append(h5)

    let p1 = new createElement('card-text', null, null, `${data.price}£`).createParagraphe()
    div4.append(p1)

    let p2 = new createElement('card-text', null, null, `${data.description}`).createParagraphe()
    div4.append(p2)

    let label = new createElement('card-text', 'for', 'lentilles', 'Lentilles : ', 'margin-right: 10px').createLabel()
    div4.append(label)

    let select = new createElement('lentilles', 'id', 'lentilles').createSelect()
    div4.append(select)

    let option1 = new createElement(null, null, null, `${data.lenses[0]}`, null, null, `${data.lenses}`).createOption()
    select.append(option1)

    let option2 = new createElement(null, null, null, `${data.lenses[1]}`, null, null, `${data.lenses}`).createOption()
    select.append(option2)

    let option3 = new createElement(null, null, null, `${data.lenses[2]}`, null, null, `${data.lenses}`).createOption()
    select.append(option3)

    let a = new createElement('btn btn-warning', 'style', 'position: absolute; top: 15px; right: 15px;', 'Ajouter au panier +', null, null, null, '#').createLink()
    div4.append(a)
}

//Appel page Produit
function getProduit() {
    getAccueil().then(function () {
        let links = document.querySelectorAll('#listedesproduits a')

        let p = new createElement('text-muted d-flex align-items-center justify-content-center', 'style', 'height: 60vh', "Aucun produit n'a été sélectionné").createParagraphe()
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
                let item = await setProduit(data)
                return item
            })
        }
    }).catch(err => console.log('Erreur' + err))
}

getProduit()
