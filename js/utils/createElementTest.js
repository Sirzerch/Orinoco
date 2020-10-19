//Création des éléments HTML
export default class CreateElement {
    constructor() {
    }

    createTr(className, firstSetAttributeName, firstSetAttributeValue) {
        let tr = document.createElement('tr')
        tr.className = className
        tr.setAttribute(firstSetAttributeName, firstSetAttributeValue)
        return tr
    }
    createTd(className, firstSetAttributeName, firstSetAttributeValue, innerHTML = null) {
        let td = document.createElement('td')
        td.className = className
        td.setAttribute(firstSetAttributeName, firstSetAttributeValue)
        if(innerHTML != null) {
            td.innerHTML = innerHTML
        }
        return td
    }
    createImg(className, src, alt) {
        let img = document.createElement('img')
        img.className = className
        img.src = src
        img.alt = alt
        return img
    }
    createLink(className, firstSetAttributeName, firstSetAttributeValue, innerHTML, href) {
        let a = document.createElement('a')
        a.className = className
        a.setAttribute(firstSetAttributeName, firstSetAttributeValue)
        a.innerHTML = innerHTML
        a.href = href
        return a
    }
    createDiv(className, firstSetAttributeName = null, firstSetAttributeValue = null) {
        let div = document.createElement('div')
        div.className = className
        if (firstSetAttributeName != null && firstSetAttributeValue != null) {
            div.setAttribute(firstSetAttributeName, firstSetAttributeValue)
        }
        return div
    }
    createOption(value, innerHTML) {
        let option = document.createElement('option')
        option.value = value
        option.innerHTML = innerHTML
        return option
    }
    createParagraphe(className, firstSetAttributeName = null, firstSetAttributeValue = null, innerHTML) {
        let p = document.createElement('p')
        p.className = className
        p.innerHTML = innerHTML
        if(firstSetAttributeName != null && firstSetAttributeValue != null) {
            p.setAttribute(firstSetAttributeName, firstSetAttributeValue)
        }
        return p
    }
    createTitle(className, innerHTML) {
        let h5 = document.createElement('h5')
        h5.className = className
        h5.innerHTML = innerHTML
        return h5
    }
    createLabel(className, firstSetAttributeName, firstSetAttributeValue, innerHTML) {
        let label = document.createElement('label')
        label.className = className
        label.setAttribute(firstSetAttributeName, firstSetAttributeValue)
        label.innerHTML = innerHTML
        return label
    }
    createSelect(className, firstSetAttributeName, firstSetAttributeValue) {
        let select = document.createElement('select')
        select.className = className
        select.setAttribute(firstSetAttributeName, firstSetAttributeValue)
        return select
    }
}