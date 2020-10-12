let pages = document.querySelectorAll('#pages .header__nav a')

for(let page of pages) {
    page.addEventListener('click', function(){
        let num = this.getAttribute('data-pages')
        
        document.querySelector('#pages div.active').classList.remove('active')
        document.querySelector('#page' + num).classList.add('active')
        document.querySelector('#pages .header__nav a.active').classList.remove('active')
        this.classList.add('active')
    })
}



