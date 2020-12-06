//Création des éléments HTML
export default class CreateElement {
    constructor() {
    }
    
    //Formate la balise <img>
    createImg(className, src, alt) {
        let img = document.createElement('img')
        img.className = className
        img.src = src
        img.alt = alt
        return img
    }
    //Formate la balise <a>
    createLink(className, innerHTML, href, firstSetAttributeName = null, firstSetAttributeValue = null, secondSetAttributeName = null, secondSetAttributeValue = null) {
        let a = document.createElement('a')
        a.className = className
        a.innerHTML = innerHTML
        a.href = href
        if (firstSetAttributeName != null && firstSetAttributeValue != null) {
            a.setAttribute(firstSetAttributeName, firstSetAttributeValue)
        }
        if (secondSetAttributeName != null && secondSetAttributeValue != null) {
            a.setAttribute(secondSetAttributeName, secondSetAttributeValue)
        }
        return a
    }
    //Formate la balise <div>
    createDiv(className, firstSetAttributeName = null, firstSetAttributeValue = null, innerHTML = null) {
        let div = document.createElement('div')
        div.className = className
        if (firstSetAttributeName != null && firstSetAttributeValue != null) {
            div.setAttribute(firstSetAttributeName, firstSetAttributeValue)
        }
        if (innerHTML != null) {
            div.innerHTML = innerHTML
        }

        return div
    }
    //Formate la balise <option>
    createOption(innerHTML, value) {
        let option = document.createElement('option')
        option.value = value
        option.innerHTML = innerHTML
        return option
    }
    //Formate la balise <p>
    createParagraphe(className, innerHTML, firstSetAttributeName = null, firstSetAttributeValue = null) {
        let p = document.createElement('p')
        p.className = className
        p.innerHTML = innerHTML
        if (firstSetAttributeName != null && firstSetAttributeValue != null) {
            p.setAttribute(firstSetAttributeName, firstSetAttributeValue)
        }
        return p
    }
    //Formate la balise <h>
    createTitle(className, innerHTML) {
        let h5 = document.createElement('h5')
        h5.className = className
        h5.innerHTML = innerHTML
        return h5
    }
    //Formate la balise <label>
    createLabel(className, firstSetAttributeName, firstSetAttributeValue, innerHTML) {
        let label = document.createElement('label')
        label.className = className
        label.setAttribute(firstSetAttributeName, firstSetAttributeValue)
        label.innerHTML = innerHTML
        return label
    }
    //Formate la balise <select>
    createSelect(className, firstSetAttributeName, firstSetAttributeValue) {
        let select = document.createElement('select')
        select.className = className
        select.setAttribute(firstSetAttributeName, firstSetAttributeValue)
        return select
    }
}