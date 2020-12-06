export default class createBasketQuantity {

	constructor() {
		this.total = 0
		this.products = []
	}

	//Ajouter un produit depuis la page produit
	addProduct(data) {
		let product = {
			id: '',
			price: '',
			number: 0,
			total: 0
		}
		let array = this.products

		//Trouve l'id du produit sélectionné dans le tableau
		let findIndex = array.findIndex(prod => prod.id === `${data._id}`)
		let find = array[findIndex]

		// si le produit est déjà présent dans l'attribut
		if (find) {
			find.number++
		} else {
			this.products.push(product)
			product.id = `${data._id}`
			product.price = `${data.price}`
			product.number = 1
		}
		//Mise à jour du total
		this.calculateTotal()
		if (find) {
			find.total = this.total
		}
		else {
			product.total = this.total
		}
		//Mise à jour du storage
		this.setBasketStorage(find)
	}

	//Mise à jour de la quantitée
	updateProductQuantity(id, operation = "less") {
		let array = this.products

		let findIndex = array.findIndex(prod => prod.id === id)
		let find = array[findIndex]

		if(operation == "more") {
			find.number++
			this.calculateTotal()
			find.total = this.total
		} else if(find.number > 1){
			find.number--
			this.calculateTotal()
			find.total = this.total
		}
		this.setBasketStorage(find)
		return find
	}

	//Calcul le prix total du panier
	calculateTotal() {
		//Réinitialise le total
		this.total = 0
		for (let product of this.products) {
			this.total += product.price * product.number
		}
	}

	//Construit l'objet panier pour le LocalStorage
	setBasketStorage(find) {
		//Si l'objet existe, l'envoie dans le localStorage
		if (find !== undefined) {
			let productStringify = JSON.stringify(find)
			localStorage.setItem('product', productStringify)
		}
		//Sinon :
		else {
			//Envoie le dernier objet du tableau dans le localStorage
			for (let i = 0; i < this.products.length; i++) {
				let productStringify = JSON.stringify(this.products[i])
				localStorage.setItem('product', productStringify)
			}
		}
	}

	//Remplit l'objet "panier" avec les données localstorage
	getBasketStorage() {
		let getItems = JSON.parse(localStorage.getItem('product'))
		return getItems
	}
}

