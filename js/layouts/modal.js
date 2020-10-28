let modal = null

const openModal = function(e) {
    e.preventDefault()
    let target = document.querySelector(this.getAttribute('href'))
    target.style.display = null
    modal = target
    modal.querySelector('.js-modal-close').addEventListener('click', closeModal)
}

const closeModal = function(e) {
    e.preventDefault()
    e.stopPropagation()
    modal.style.display = "none"
    modal = null
    modal.querySelector('.js-modal-close').removeEventListener('click', closeModal)
}

document.querySelectorAll('.js-modal').forEach(a => { 
    a.addEventListener('click', openModal)
})

window.addEventListener('keydown', function(e) {
    if(e.key === "Escape" || e.key === "Esc") {
        closeModal(e)
    }
})
