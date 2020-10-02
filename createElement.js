export default class createElement {
    constructor(className, firstName, firstValue, secondName, secondValue, text, src, alt, val, href) {
        this.className = className
        this.firstSetAttributeName = firstName
        this.firstSetAttributeValue = firstValue
        this.secondSetAttributeName = secondName
        this.secondSetAttributeValue = secondValue
        this.innerHTML = text
        this.src = src
        this.alt = alt
        this.value = val
        this.href = href
    }

    createTr() {
        let tr = document.createElement('tr')
        tr.className = this.className
        tr.setAttribute(this.firstSetAttributeName, this.firstSetAttributeValue)
        return tr
    }

    createTd() {
        let td = document.createElement('td')
        td.className = this.className
        td.setAttribute(this.firstSetAttributeName, this.firstSetAttributeValue)
        td.innerHTML = this.innerHTML
        return td
    }
    createImg() {
        let img = document.createElement('img')
        img.className = this.className
        img.src = this.src
        img.alt = this.alt
        return img
    }
    createLink() {
        let a = document.createElement('a')
        a.className = this.className
        a.setAttribute(this.firstSetAttributeName, this.firstSetAttributeValue)
        a.innerHTML = this.innerHTML
        a.href = this.href
        return a
    }
    createLink2() {
        let a = document.createElement('a')
        a.className = this.className
        a.setAttribute(this.firstSetAttributeName, this.firstSetAttributeValue)
        a.setAttribute(this.secondSetAttributeName, this.secondSetAttributeValue)
        a.innerHTML = this.innerHTML
        a.href = this.href
        return a
    }
    createDiv() {
        let div = document.createElement('div')
        div.className = this.className
        div.setAttribute(this.firstSetAttributeName, this.firstSetAttributeValue)
        return div
    }
    createDiv2() {
        let div = document.createElement('div')
        div.className = this.className
        return div
    }

    createOption() {
        let option = document.createElement('option')
        option.value = this.value
        option.innerHTML = this.innerHTML
        return option
    }

    createParagraphe() {
        let p = document.createElement('p')
        p.className = this.className
        p.innerHTML = this.innerHTML
        p.setAttribute(this.firstSetAttributeName, this.firstSetAttributeValue)
        return p
    }

    createTitle() {
        let h5 = document.createElement('h5')
        h5.className = this.className
        h5.innerHTML = this.innerHTML
        return h5
    }

    createLabel() {
        let label = document.createElement('label')
        label.setAttribute(this.firstSetAttributeName, this.firstSetAttributeValue)
        label.innerHTML = this.innerHTML
        label.className = this.className
        return label
    }

    createSelect() {
        let select = document.createElement('select')
        select.className = this.className
        select.setAttribute(this.firstSetAttributeName, this.firstSetAttributeValue)
        return select
    }
}

