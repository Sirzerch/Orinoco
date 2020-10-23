export default class CreatePage {

	constructor() {
	}

	create_page_product(element_creator, data) {
		let firstDiv = element_creator.createDiv('row no-gutters')
		let secondDiv = element_creator.createDiv('col-md-4')
		let img = element_creator.createImg('card-img', `${data.imageUrl}`, 'Appareil photo')
		let secondDivBis = element_creator.createDiv('col-md-8')
		let thirdDiv = element_creator.createDiv('card-body')
		let fourthDiv = element_creator.createDiv('card-body--title')
		let h5 = element_creator.createTitle('card-title', `${data.name}`)
		let firstP = element_creator.createParagraphe('card-text', `${data.price}£`)
		let secondP = element_creator.createParagraphe('card-text', `${data.description}`)
		let label = element_creator.createLabel('card-text', 'for', 'lentilles', 'lentilles : ')
		let select = element_creator.createSelect('lentilles', 'id', 'lentilles')
		let firstOption = element_creator.createOption(`${data.lenses[0]}`, `${data.lenses}`)
		let secondOption = element_creator.createOption(`${data.lenses[1]}`, `${data.lenses}`)
		let thirdOption = element_creator.createOption(`${data.lenses[2]}`, `${data.lenses}`)
		let a = element_creator.createLink('btn btn-warning', 'Ajouter au panier +', '#', 'data-panier', `${data._id}`)

		firstDiv.append(secondDiv)
		secondDiv.append(img)
		secondDiv.append(secondDivBis)
		secondDivBis.append(thirdDiv)
		thirdDiv.append(fourthDiv)
		fourthDiv.append(h5)
		fourthDiv.append(a)
		thirdDiv.append(firstP)
		thirdDiv.append(secondP)
		thirdDiv.append(label)
		thirdDiv.append(select)
		select.append(firstOption)
		select.append(secondOption)
		select.append(thirdOption)

		return firstDiv
	}

	create_page_panier(element_creator, data) {
		let items = []
		let td1 = element_creator.createTd('w-25', 'data-tr', 'td')
		let td2 = element_creator.createTd('align-middle', 'data-td', 'td', `${data.name}`)
		let td3 = element_creator.createTd('align-middle', 'data-td', 'td', `${data.price}£`)
		let td4 = element_creator.createTd('align-middle', 'data-td', 'td', `${data.description}`)
		let td5 = element_creator.createTd('align-middle', 'data-td', 'td')
		items.push(td1, td2, td3, td4, td5)

		let tr = element_creator.createTr('text-center', 'data-tr', 'tr')

		for (let item of items) {
			tr.appendChild(item)
		}

		let img = element_creator.createImg('img-fluid img-thumbnail', `${data.imageUrl}`, 'Appareil photo')
		td1.appendChild(img)

		let p = element_creator.createParagraphe('card-text js-card-text', 1)
		td5.appendChild(p)

		return tr
	}
}