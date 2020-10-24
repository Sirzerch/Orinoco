export default class Panier {

	constructor() {
		this.cost = 0
		this.products = []
		this.ids = []
		this.quantity = 2
	}

	addProductPrice(data) {
		this.products.push(+`${data.price}`)
		for (let product of this.products) {
			this.cost = this.cost += +product
		}
		return this.cost
	}

	quantityProduct(data) {
		let array = this.ids

		let findIndex = array.findIndex(prod => prod === `${data._id}`)
		let find = array[findIndex]
		
		if(find) {
			this.quantity++
		}
		else {
			array.push(`${data._id}`)
			this.quantity = 2
		}
		return this.quantity
	}
}