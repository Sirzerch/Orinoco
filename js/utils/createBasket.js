export default class Panier {

	constructor() {
		this.total = 0
		this.products = []
		this.ids = []
		this.quantity = 1
	}

	addProductPrice(data) {
		this.total = 0
		this.products.push(+`${data.price}`)
		for (let product of this.products) {
			this.total = this.total += product
		}
		return this.total
	}

	quantityProduct(data) {
		let array = this.ids

		let findIndex = array.findIndex(prod => prod === `${data._id}`)
		let find = array[findIndex]

		if (find) {
			this.quantity++
		}
		else {
			array.push(`${data._id}`)
			this.quantity = 1
			this.quantity++
		}
		return this.quantity
	}

	lessQuantity(numberValue) {
		if (numberValue > 1) {
			+numberValue--
		}
		else {
			numberValue = 1
		}
		return numberValue
	}

	moreQuantity(numberValue) {
		+numberValue++
		return numberValue
	}

	lessProductPrice(data) {
		this.total = this.total -= +`${data.price}`
		return this.total
	}

	moreProductPrice(data) {
		this.total = this.total += +`${data.price}`
		return this.total
	}
}