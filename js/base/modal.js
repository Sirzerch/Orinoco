//Modal pour le formulaire 
let modal

//Ouvre la modal au 'click' de l'utilisateur
const openModal = function (e) {
    e.preventDefault()
    let target = document.querySelector(this.getAttribute('href'))
    target.style.display = null
    modal = target
    pageActive()
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
}

//Ferme la modal au 'click' de l'utilisateur
const closeModal = function (e) {
    e.preventDefault()
    e.stopPropagation()
    modal.style.display = "none"
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
}

document.querySelectorAll('.js-modal').forEach(a => {
    a.addEventListener('click', openModal)
})

//Ferme la modal avec le bouton "Escape"
window.addEventListener('keydown', function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    }
})

//Ferme la modal si la page PANIER n'est pas active
const pageActive = function () {
    let i = document.querySelectorAll('#pages .header__nav a')

    for (let page of i) {
        page.addEventListener('click', function (e) {
            let pageActive = document.querySelector('#pages div#page2.active')
            if (pageActive == null) {
                closeModal(e)
            }
        })
    }
}

