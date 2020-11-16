export default class CreatePage {

	constructor() {
		this.ids = []
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
		let a = element_creator.createLink('btn btn-primary', 'Ajouter au panier +', '#', 'data-panier', `${data._id}`)

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
		let array = this.ids
		
		let findIndex = array.findIndex(prod => prod === `${data._id}`)
		let find = array[findIndex]

		if (!find) {
			array.push(`${data._id}`)

			let tr = element_creator.createTr('text-center', 'data-tr', 'tr')
			let div = element_creator.createDiv('quantity')
			
			//
			let elementsOfPanier = []
			elementsOfPanier.push(tr, div)

			let product = element_creator.createTr('product')

			for(let elementOfPanier of elementsOfPanier) {
				product.append(elementOfPanier)
			}
			//Fin
			
			//Boutons + et -
			let btnsOfQuantity = []
			let less = element_creator.createLink('quantity__less js-quantity', '-', '#', 'data-quantity', `less`, 'data-id', `${data._id}`)
			let more = element_creator.createLink('quantity__more js-quantity', '+', '#', 'data-quantity', `more`, 'data-id', `${data._id}`)
			btnsOfQuantity.push(less, more)

			for(let btnOfQuantity of btnsOfQuantity) {
				div.append(btnOfQuantity)
			}
			//fin
			
			//Code pour 1 produit
			let items = []
			let td1 = element_creator.createTd('w-25', 'data-tr', 'td')
			let td2 = element_creator.createTd('align-middle', 'data-td', 'td', `${data.name}`)
			let td3 = element_creator.createTd('align-middle', 'data-td', 'td', `${data.price}£`)
			let td4 = element_creator.createTd('align-middle', 'data-td', 'td', `${data.description}`)
			let td5 = element_creator.createTd('align-middle', 'data-td', 'td')
			items.push(td1, td2, td3, td4, td5)

			for (let item of items) {
				tr.appendChild(item)
			}

			let img = element_creator.createImg('img-fluid img-thumbnail', `${data.imageUrl}`, 'Appareil photo')
			td1.appendChild(img)

			let p = element_creator.createParagraphe(`card-text js-card-${data._id}`, 0)
			td5.appendChild(p)
			//Fin
			return product
		}
		else {
			return null
		}
	}

	createPageCommande(element_creator, responseData, total) {
		let elementsOfPageCommande = []
		let firstP = element_creator.createParagraphe('submit__message', 'Orinoco vous remercie pour votre commande !')
		let secondP = element_creator.createParagraphe('submit__number', 'Numéro de commande : ' + responseData.orderId)
		let thirdP = element_creator.createParagraphe('submit__cost','Sous-Total : ' + total +'£')
		elementsOfPageCommande.push(firstP, secondP, thirdP)
		
		let div = element_creator.createDiv('submit')

		for(let elementOfPageCommande of elementsOfPageCommande) {
			div.append(elementOfPageCommande)
		}
		return div
	}
	
	productsOfPanier() {
		return this.ids
	}
}
