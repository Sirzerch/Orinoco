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



//Au click du bouton détails, l'onglet produits ce déclenche.
//Au click du bouton détails, une variable stock l'id du produit souhaité, en récupérant le data-button.
//L'onglet produits génére la page correspondant à l'id du produit en question.

//Pour manipuler les éléments de mon site, l'utilisation data-* vas être essentiel.
//J'applique la même méthodes que pour la gestion des pages (pages.js) sur le reste du site Orinoco.
