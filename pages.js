let pages = document.querySelectorAll('.pages a')

for(let i = 0; i < pages.length; i++) {
    pages[i].addEventListener('click', function(e){
        e.preventDefault()
        let div = this.parentNode.parentNode.parentNode.parentNode
        let li = this.parentNode

        if (li.classList.contains('active')) {
            return false
        }
        div.querySelector('.pages .active').classList.remove('active')
        li.classList.add('active')
        div.querySelector('.page-content.active').classList.remove('active')
        div.querySelector(this.getAttribute('href')).classList.add('active')
    })
}