let $ = function (selector) {
    return document.querySelector(selector);
};

//Création <tr></tr>
let tr = document.createElement('tr')
function createTr(className, name, value) { 
    tr.className = className
    tr.setAttribute(name, value)
    return tr
}

//Création <td></td>
function createTd(className, name, value, text) {
    let td = document.createElement('td')
    td.className = className
    td.setAttribute(name, value)
    if (text !== false) {
        td.innerHTML = text
    }
    return td
}

//création <img></img>
function createImg(className, src) {
    let img = document.createElement('img')
    img.className = className
    img.src = src
    return img
}

function createLink(className, role, button, dataButton, id, text) {
    let a = document.createElement('a')
    a.className = className
    a.setAttribute(role, button)
    a.setAttribute(dataButton, id)
    a.innerHTML = text
    return a
}

//Ajoute pour chaque enfant un parent
function appendChildren(parent, children) {
    children.forEach(function(child){
        parent.append(child)
    })
}

let items = [
    createTd('w-25', 'data-tr', 'td', false),
    createTd('align-middle', 'data-td', 'td', 'name'),
    createTd('align-middle', 'data-td', 'td', 'price'),
    createTd('align-middle', 'data-td', 'td', 'description'),
    createTd('align-middle', 'data-td', 'td', false)
]

let myList = $('#listedesproduits')
myList.appendChild(createTr('text-center', 'data-tr', 'tr'))

appendChildren(tr, items)
items[0].appendChild(createImg('img-fluid img-thumbnail', '#'))
items[4].appendChild(createLink('btn btn-primary pages', 'role', 'button','data-button', 'id', 'Détails'))





