const openModal = function(e) {
    e.preventDefault()
    let target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = null
}


let test = document.querySelectorAll('.js-modal').forEach(a => { 
    a.addEventListener('click', openModal)
})

console.log(test)