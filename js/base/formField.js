//Récupére l'id de la balise form
let form = document.querySelector('#inscription')


form.firstName.addEventListener('input', function () {
    //Récupère la balise small
    let small = this.nextElementSibling

    //Si le champ firstName ne contient pas de chiffre et qu'il n'est pas vide alors il est valide
    if(!/[0-9]/.test(this.value) && this.value.length !== 0) {
        small.innerHTML = 'Valide'
        small.classList.remove('text__danger')
        small.classList.add('text__success')
    }//Sinon il n'est pas valide 
    else {
        small.innerHTML = 'Non Valide'
        small.classList.remove('text__success')
        small.classList.add('text__danger')
    }
})

//Valide ou non le champ lastName
form.lastName.addEventListener('input', function () {
    //Récupère la balise small
    let small = this.nextElementSibling

    //Si le champ lastName ne contient pas de chiffre et qu'il n'est pas vide alors il est valide
    if(!/[0-9]/.test(this.value) && this.value.length !== 0) {
        small.innerHTML = 'Valide'
        small.classList.remove('text__danger')
        small.classList.add('text__success')
    } //Sinon il n'est pas valide 
    else {
        small.innerHTML = 'Non Valide'
        small.classList.remove('text__success')
        small.classList.add('text__danger')
    }
})