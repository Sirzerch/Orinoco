export default class CreatePage {

	constructor(createElement) {
		this.idsOfProducts = []
		this.createElement = createElement
	}

	//Crée et formate l'HTML d'un produit de la page ACCUEIL
	createProductOfHome(cam) {
		let items = []
		let td1 = this.createElement.createDiv('table__container-img', 'data-tr', 'td')
		let td2 = this.createElement.createDiv('align-middle', 'data-td', 'td', `${cam.name}`)
		let td3 = this.createElement.createDiv('align-middle', 'data-td', 'td', `${cam.price}£`)
		let td4 = this.createElement.createDiv('align-middle', 'data-td', 'td', `${cam.description}`)
		let td5 = this.createElement.createDiv('align-middle', 'data-td', 'td')
		items.push(td1, td2, td3, td4, td5)

		let tr = this.createElement.createDiv('table__container-product', 'data-tr', 'tr')

		for (let item of items) {
			tr.appendChild(item)
		}

		let img = this.createElement.createImg('img-thumbnail', `${cam.imageUrl}`, 'Appareil photo')
		td1.appendChild(img)

		let a = this.createElement.createLink('btn btn--primary', 'Détails', '#', 'data-button', `${cam._id}`)
		td5.appendChild(a)

		return tr
	}

	//Crée et formate l'HTML d'un produit de la page PRODUIT
	createProductOfProduct(data) {

		//Crée les balises HTML
		let cardContainer = this.createElement.createDiv('card__container')
		let cardContainerImg = this.createElement.createDiv('card__container-img')
		let img = this.createElement.createImg('img-thumbnail', `${data.imageUrl}`, 'Appareil photo')
		let cardContainerText = this.createElement.createDiv('card__container-text')
		let fourthDiv = this.createElement.createDiv('card__body')
		let fifthDiv = this.createElement.createDiv('card__body-title')
		let h5 = this.createElement.createTitle('card__title', `${data.name}`)
		let firstP = this.createElement.createParagraphe('card__text', `${data.price}£`)
		let secondP = this.createElement.createParagraphe('card__text', `${data.description}`)
		let label = this.createElement.createLabel('card__text', 'for', 'lentilles', 'lentilles : ')
		let select = this.createElement.createSelect('lentilles', 'id', 'lentilles')
		let firstOption = this.createElement.createOption(`${data.lenses[0]}`, `${data.lenses}`)
		let secondOption = this.createElement.createOption(`${data.lenses[1]}`, `${data.lenses}`)
		let thirdOption = this.createElement.createOption(`${data.lenses[2]}`, `${data.lenses}`)
		let a = this.createElement.createLink('btn btn--primary', 'Ajouter au panier +', '#', 'data-panier', `${data._id}`)

		//Etablie la structure HTML
		cardContainer.append(cardContainerImg)
		cardContainerImg.append(img)
		cardContainer.append(cardContainerText)
		cardContainerText.append(fourthDiv)
		fourthDiv.append(fifthDiv)
		fifthDiv.append(h5)
		fifthDiv.append(a)
		fourthDiv.append(firstP)
		fourthDiv.append(secondP)
		fourthDiv.append(label)
		fourthDiv.append(select)
		select.append(firstOption)

		//Si le produit contient 2 lentilles alors crée la balise pour la 2eme lentille
		if (secondOption.innerHTML !== 'undefined') {
			select.append(secondOption)
		}
		//Si le produit contient 3 lentilles alors crée la balise pour la 3eme lentille
		if (thirdOption.innerHTML !== 'undefined') {
			select.append(thirdOption)
		}

		return cardContainer
	}

	//Crée et formate l'HTML d'un produit de la page PANIER
	createProductOfBasket(data) {
		let array = this.idsOfProducts

		//Trouve le produit sélectionné dans le tableau "idsOfProducts"
		let findIndex = array.findIndex(prod => prod === `${data._id}`)
		let find = array[findIndex]

		//Si le produit n'est pas trouver dans le tableau :
		//Alors pousse l'id du produit dans le tableau du constructor et crée un produit avec les informations de l'id sélectinné
		if (!find) {
			array.push(`${data._id}`)

			let tr = this.createElement.createDiv('table__container-product', 'data-tr', 'tr')
			let tableContainer = this.createElement.createDiv('table__container')

			tableContainer.append(tr)

			//Code pour 1 produit
			let items = []
			let td1 = this.createElement.createDiv('table__container-img', 'data-tr', 'td')
			let td2 = this.createElement.createDiv('align-middle', 'data-td', 'td', `${data.name}`)
			let td3 = this.createElement.createDiv('align-middle', 'data-td', 'td', `${data.price}£`)
			let td4 = this.createElement.createDiv('align-middle', 'data-td', 'td', `${data.description}`)
			let td5 = this.createElement.createDiv('align-middle', 'data-td', 'td')
			items.push(td1, td2, td3, td4, td5)

			for (let item of items) {
				tr.appendChild(item)
			}

			let img = this.createElement.createImg('img-fluid img-thumbnail', `${data.imageUrl}`, 'Appareil photo')
			td1.appendChild(img)

			let p = this.createElement.createParagraphe(`card__text js-card-${data._id}`, 0)
			td5.appendChild(p)

			let div = this.createElement.createDiv(`quantity js-quantity-${data._id}`)
			tr.append(div)

			//Formate les Boutons + et -
			let btnsOfQuantity = []
			let less = this.createElement.createLink('quantity__less', '-', '#', 'data-quantity', `less`, 'data-id', `${data._id}`)
			let more = this.createElement.createLink('quantity__more', '+', '#', 'data-quantity', `more`, 'data-id', `${data._id}`)
			btnsOfQuantity.push(less, more)

			for (let btnOfQuantity of btnsOfQuantity) {
				div.append(btnOfQuantity)
			}

			return tableContainer
		}
		//Si le produit sélectionné par l'utilisateur est trouver dans le tableau 'idsOfProducts' alors on ne fait rien
		else {
			return null
		}
	}

	//Crée et Formate la page COMMANDE
	createPageCommande(responseData, total) {
		let elementsOfPageCommande = []
		let firstP = this.createElement.createParagraphe('order__message', 'Orinoco vous remercie pour votre commande !')
		let secondP = this.createElement.createParagraphe('order__number', 'Numéro de commande : ' + responseData.orderId)
		let thirdP = this.createElement.createParagraphe('order__total', 'Sous-Total : ' + total + '£')
		elementsOfPageCommande.push(firstP, secondP, thirdP)

		let div = this.createElement.createDiv('order')

		for (let elementOfPageCommande of elementsOfPageCommande) {
			div.append(elementOfPageCommande)
		}
		return div
	}
	//Retourne les identifiants du tableau pour l'envoie en methode POST
	allId() {
		return this.idsOfProducts
	}
}
