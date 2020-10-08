import createElement from './accueil.js'

let $ = function (selector) {
    return document.querySelector(selector);
};

//API caméra
let url = "http://localhost:3000/api/cameras/"
//

function setAccueil(data) {
    for (let cam of data) {
        let items = []
        let td1 = new createElement('w-25', 'data-tr', 'td', null).createTd()
        let td2 = new createElement('align-middle', 'data-td', 'td', `${cam.name}`).createTd()
        let td3 = new createElement('align-middle', 'data-td', 'td', `${cam.price}£`).createTd()
        let td4 = new createElement('align-middle', 'data-td', 'td', `${cam.description}`).createTd()
        let td5 = new createElement('align-middle', 'data-td', 'td', null).createTd()
        items.push(td1, td2, td3, td4, td5)
        console.log(items)

        let tr = new createElement('text-center', 'data-tr', 'tr', null) 
        let list = $('#listedesproduits')
        tr = tr.createTr()
        list.appendChild(tr)

        for (let item of items) {
            tr.appendChild(item)
        }

        let img = new createElement('img-fluid img-thumbnail', null, null, null, `${cam.imageUrl}`)
        td1.appendChild(img.createImg())


        let a = new createElement('btn btn-primary', 'data-button', `${cam._id}`, 'Détails')
        td5.appendChild(a.createLink())
        
    }

}

//Appel page Accueil
async function getAccueil() {
    let response = await fetch(url)
    let data = await response.json()
    let pages = await setAccueil(data)
    return pages
}

getAccueil()
//
