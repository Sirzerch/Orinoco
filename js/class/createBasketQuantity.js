export default class createBasketQuantity {

	constructor() {
		this.total = 0
		this.products = []
	}

	//  ajouter un produit depuis la page produit
	addProduct(data) {
		let product = {
			id: '',
			price: '',
			number: 0,
			total: 0
		}
		let array = this.products

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
		//MAJ du total
		this.calculateTotal()
		if (find) {
			find.total = this.total
		}
		else {
			product.total = this.total
		}
		//MAJ du storage
		this.setBasketStorage(find)
	}

	// MAJ la quantité
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

	// calcul du prix total du panier
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
		else {
			//Envoie le dernier objet du tableau dans le localStorage
			for (let i = 0; i < this.products.length; i++) {
				let productStringify = JSON.stringify(this.products[i])
				localStorage.setItem('product', productStringify)
			}
		}
	}

	// remplit l'objet "panier" avec le localstorage
	getBasketStorage() {
		let getItems = JSON.parse(localStorage.getItem('product'))
		return getItems
	}
}

