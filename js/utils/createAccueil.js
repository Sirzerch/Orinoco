export default class Accueil {

    constructor() {
    }

    set_product(element_creator, cam) {
        let items = []
        let td1 = element_creator.createTd('w-25', 'data-tr', 'td')
        let td2 = element_creator.createTd('align-middle', 'data-td', 'td', `${cam.name}`)
        let td3 = element_creator.createTd('align-middle', 'data-td', 'td', `${cam.price}£`)
        let td4 = element_creator.createTd('align-middle', 'data-td', 'td', `${cam.description}`)
        let td5 = element_creator.createTd('align-middle', 'data-td', 'td')
        items.push(td1, td2, td3, td4, td5)

        let tr = element_creator.createTr('text-center', 'data-tr', 'tr')

        for (let item of items) {
            tr.appendChild(item)
        }

        let img = element_creator.createImg('img-fluid img-thumbnail', `${cam.imageUrl}`, 'Appareil photo')
        td1.appendChild(img)

        let a = element_creator.createLink('btn btn-primary', 'Détails', '#', 'data-button', `${cam._id}`)
        td5.appendChild(a)

        return tr
    }

}