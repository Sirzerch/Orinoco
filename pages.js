let pages = document.querySelectorAll('#pages .pages-titles a')

for(let page of pages) {
    page.addEventListener('click', function(){
        let num = this.getAttribute('data-pages')
        
        document.querySelector('#pages div.active').classList.remove('active')
        document.querySelector('#page' + num).classList.add('active')
        document.querySelector('#pages .pages-titles a.active').classList.remove('active')
        this.classList.add('active')
    })
}



