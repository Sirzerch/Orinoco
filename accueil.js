export default class createElement {
    constructor(className, name, value, text, src) {
        this.className = className
        this.setAttributeName = name
        this.setAttributeValue = value
        this.src = src
        this.innerHTML = text
    }

    createTr() {
        let tr = document.createElement('tr')
        tr.className = this.className
        tr.setAttribute(this.setAttributeName, this.setAttributeValue)
        return tr
    }

    createTd() {
        let td = document.createElement('td')
        td.className = this.className
        td.setAttribute(this.setAttributeName, this.setAttributeValue)
        td.innerHTML = this.innerHTML
        return td
    }
    createImg() {
        let img = document.createElement('img')
        img.className = this.className
        img.src = this.src
        return img
    }
    createLink() {
        let a = document.createElement('a')
        a.className = this.className
        a.setAttribute(this.setAttributeName, this.setAttributeValue)
        a.innerHTML = this.innerHTML
        return a
    }

    appendChildren(parent, children) {
        children.forEach(function (child) {
            parent.append(child.createTd())
        })
    }
}

