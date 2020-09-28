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
        const td1 = new createElement('w-25', 'data-tr', 'td', null)
        const td2 = new createElement('align-middle', 'data-td', 'td', `${cam.name}`)
        const td3 = new createElement('align-middle', 'data-td', 'td', `${cam.price}£`)
        const td4 = new createElement('align-middle', 'data-td', 'td', `${cam.description}`)
        const td5 = new createElement('align-middle', 'data-td', 'td', null)
        items.push(td1, td2, td3, td4, td5)


        const tr = new createElement('text-center', 'data-tr', 'tr', null) 
        let list = $('#listedesproduits')
        list.appendChild(tr.createTr())

        let getTr = document.querySelectorAll('#listedesproduits tr')
        console.log(getTr)
        // let getTrs = getTr[0, 1, 2, 3, 4]
        // tr.appendChildren(getTr, items)

        const img = new createElement('img-fluid img-thumbnail', null, null, null, `${cam.imageUrl}`)
        
        let getTd = document.querySelectorAll('#listedesproduits td')
        console.log(getTd)
        let getTd1 = getTd[0]
        getTd1.appendChild(img.createImg())

        const a = new createElement('btn btn-primary', 'data-button', `${cam._id}`, 'Détails')
        let getTd5 = getTd[1]
        getTd5.appendChild(a.createLink())
        
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