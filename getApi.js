//Code non utilisé

export default class getApi {
    constructor(http) {
        this.http = http
    }

    getPages() {
        let http = this.http
        return async function () {
            let response = await fetch(http)
            let data = await response.json()
            // let page = await setAccueil(data)
            return data
        }
    }
}