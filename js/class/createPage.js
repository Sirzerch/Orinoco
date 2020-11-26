export default class CreatePage {
	
	constructor(createElement) {
		this.ids = []
		this.createElement = createElement 
	}
	
    //Crée et formate l'HTML d'un produit de la page ACCUEIL
	createProductOfHome(cam) {
        let items = []
        let td1 = this.createElement.createTd('w-25', 'data-tr', 'td')
        let td2 = this.createElement.createTd('align-middle', 'data-td', 'td', `${cam.name}`)
        let td3 = this.createElement.createTd('align-middle', 'data-td', 'td', `${cam.price}£`)
        let td4 = this.createElement.createTd('align-middle', 'data-td', 'td', `${cam.description}`)
        let td5 = this.createElement.createTd('align-middle', 'data-td', 'td')
        items.push(td1, td2, td3, td4, td5)

        let tr = this.createElement.createTr('text-center', 'data-tr', 'tr')

        for (let item of items) {
            tr.appendChild(item)
        }

        let img = this.createElement.createImg('img-fluid img-thumbnail', `${cam.imageUrl}`, 'Appareil photo')
        td1.appendChild(img)

        let a = this.createElement.createLink('btn btn-primary', 'Détails', '#', 'data-button', `${cam._id}`)
        td5.appendChild(a)

        return tr
    }

	//Crée et formate l'HTML d'un produit de la page PRODUIT
	createProductOfProduct(data) {
		let firstDiv = this.createElement.createDiv('row no-gutters')
		let secondDiv = this.createElement.createDiv('col-md-4')
		let img = this.createElement.createImg('card-img', `${data.imageUrl}`, 'Appareil photo')
		let secondDivBis = this.createElement.createDiv('col-md-8')
		let thirdDiv = this.createElement.createDiv('card-body')
		let fourthDiv = this.createElement.createDiv('card-body--title')
		let h5 = this.createElement.createTitle('card-title', `${data.name}`)
		let firstP = this.createElement.createParagraphe('card-text', `${data.price}£`)
		let secondP = this.createElement.createParagraphe('card-text', `${data.description}`)
		let label = this.createElement.createLabel('card-text', 'for', 'lentilles', 'lentilles : ')
		let select = this.createElement.createSelect('lentilles', 'id', 'lentilles')
		let firstOption = this.createElement.createOption(`${data.lenses[0]}`, `${data.lenses}`)
		let secondOption = this.createElement.createOption(`${data.lenses[1]}`, `${data.lenses}`)
		let thirdOption = this.createElement.createOption(`${data.lenses[2]}`, `${data.lenses}`)	
		let a = this.createElement.createLink('btn btn-primary', 'Ajouter au panier +', '#', 'data-panier', `${data._id}`)

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
		if(secondOption.innerHTML !== 'undefined') {
			select.append(secondOption)
		}
		if(thirdOption.innerHTML !== 'undefined') {
			select.append(thirdOption)
		}

		return firstDiv
	}

	//Crée et formate l'HTML d'un produit de la page PANIER
	createProductOfBasket(data) {
		let array = this.ids
		
		let findIndex = array.findIndex(prod => prod === `${data._id}`)
		let find = array[findIndex]

		if (!find) {
			array.push(`${data._id}`)

			let tr = this.createElement.createTr('text-center', 'data-tr', 'tr')
			let div = this.createElement.createDiv(`quantity js-quantity-${data._id}`)
			
			//
			let elementsOfPanier = []
			elementsOfPanier.push(tr, div)

			let product = this.createElement.createTr('product')

			for(let elementOfPanier of elementsOfPanier) {
				product.append(elementOfPanier)
			}
			//Fin
			
			//Boutons + et -
			let btnsOfQuantity = []
			let less = this.createElement.createLink('quantity__less', '-', '#', 'data-quantity', `less`, 'data-id', `${data._id}`)
			let more = this.createElement.createLink('quantity__more', '+', '#', 'data-quantity', `more`, 'data-id', `${data._id}`)
			btnsOfQuantity.push(less, more)

			for(let btnOfQuantity of btnsOfQuantity) {
				div.append(btnOfQuantity)
			}
			//fin
			
			//Code pour 1 produit
			let items = []
			let td1 = this.createElement.createTd('w-25', 'data-tr', 'td')
			let td2 = this.createElement.createTd('align-middle', 'data-td', 'td', `${data.name}`)
			let td3 = this.createElement.createTd('align-middle', 'data-td', 'td', `${data.price}£`)
			let td4 = this.createElement.createTd('align-middle', 'data-td', 'td', `${data.description}`)
			let td5 = this.createElement.createTd('align-middle', 'data-td', 'td')
			items.push(td1, td2, td3, td4, td5)

			for (let item of items) {
				tr.appendChild(item)
			}

			let img = this.createElement.createImg('img-fluid img-thumbnail', `${data.imageUrl}`, 'Appareil photo')
			td1.appendChild(img)

			let p = this.createElement.createParagraphe(`card-text js-card-${data._id}`, 0)
			td5.appendChild(p)
			//Fin
			return product
		}
		else {
			return null
		}
	}

	//Crée et Formate la page COMMANDE
	createPageCommande(responseData, total) {
		let elementsOfPageCommande = []
		let firstP = this.createElement.createParagraphe('submit__message', 'Orinoco vous remercie pour votre commande !')
		let secondP = this.createElement.createParagraphe('submit__number', 'Numéro de commande : ' + responseData.orderId)
		let thirdP = this.createElement.createParagraphe('submit__cost','Sous-Total : ' + total +'£')
		elementsOfPageCommande.push(firstP, secondP, thirdP)
		
		let div = this.createElement.createDiv('submit')

		for(let elementOfPageCommande of elementsOfPageCommande) {
			div.append(elementOfPageCommande)
		}
		return div
	}
	
	allId() {
		return this.ids
	}
}
