export default class Panier {

	constructor() {
        this.cost = 0
        this.products = []
	}

	addProductPrice(data) {
		this.products.push(+`${data.price}`)
		for(let product of this.products ) {
			this.cost = this.cost += +product
		}
	
		return this.cost
	}
}