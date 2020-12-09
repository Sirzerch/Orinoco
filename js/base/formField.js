//Récupére l'id de la balise form
let form = document.querySelector('#inscription')
let error = document.getElementById('js-error')

//Valide ou non le champ firstName
form.firstName.addEventListener('input', function () {
    //Récupère la balise small
    let small = this.nextElementSibling

    //Si le champ firstName ne contient pas de chiffre et qu'il n'est pas vide alors il est valide
    if (!/[0-9]/.test(this.value) && this.value.length !== 0) {
        small.innerHTML = 'Valide'
        small.classList.remove('text__danger')
        small.classList.add('text__success')
        error.innerHTML = ''
    }//Sinon il n'est pas valide :
    else {
        //indique ce qui n'est pas valide 
        small.innerHTML = 'Non Valide : Le prénom ne doit pas comporter de chiffre'
        small.classList.remove('text__success')
        small.classList.add('text__danger')
        error.innerHTML = 'Les champs doivent être correctement remplie'
    }
})

//Valide ou non le champ lastName
form.lastName.addEventListener('input', function () {
    //Récupère la balise small
    let small = this.nextElementSibling

    //Si le champ lastName ne contient pas de chiffre et qu'il n'est pas vide alors il est valide
if (!/[0-9]/.test(this.value) && this.value.length !== 0) {
        small.innerHTML = 'Valide'
        small.classList.remove('text__danger')
        small.classList.add('text__success')
        error.innerHTML = ''
    } //Sinon il n'est pas valide 
    else {
        //indique ce qui n'est pas valide 
        small.innerHTML = 'Non Valide : le nom ne doit pas comporter de chiffre'
        small.classList.remove('text__success')
        small.classList.add('text__danger')
        error.innerHTML = 'Les champs doivent être correctement remplie'
    }
})

//Valide ou non le champ adresss
form.address.addEventListener('input', function () {
    //Récupère la balise small
    let small = this.nextElementSibling

    //Si le champ adresss ne contient pas de chiffre et qu'il n'est pas vide alors il est valide
    if (/[0-9]+/.test(this.value) && this.value.length !== 0) {
        small.innerHTML = 'Valide'
        small.classList.remove('text__danger')
        small.classList.add('text__success')
        error.innerHTML = ''
    } //Sinon il n'est pas valide 
    else {
        //indique ce qui n'est pas valide 
        small.innerHTML = 'Non Valide : une adresse valide doit être saisie'
        small.classList.remove('text__success')
        small.classList.add('text__danger')
        error.innerHTML = 'Les champs doivent être correctement remplie'
    }
})

//Valide ou non le champ city
form.city.addEventListener('input', function () {
    //Récupère la balise small
    let small = this.nextElementSibling

    //Si le champ city ne contient pas de chiffre et qu'il n'est pas vide alors il est valide
    if (!/[0-9]/.test(this.value) && this.value.length !== 0) {
        small.innerHTML = 'Valide'
        small.classList.remove('text__danger')
        small.classList.add('text__success')
        error.innerHTML = ''
    } //Sinon il n'est pas valide 
    else {
        //indique ce qui n'est pas valide 
        small.innerHTML = 'Non Valide : Le champ ne doit pas comporter de chiffre'
        small.classList.remove('text__success')
        small.classList.add('text__danger')
        error.innerHTML = 'Les champs doivent être correctement remplie'
    }
})

//Valide ou non le champ email
form.email.addEventListener('input', function () {
    //Récupère la balise small
    let small = this.nextElementSibling
    let emailTest = new RegExp('^[a-z0-9.-_]+[@]{1}[a-z0-9.-_]+[.]{1}[a-z]+$', 'g')

    //Si le champ email ne contient pas de chiffre et qu'il n'est pas vide alors il est valide
    if (emailTest.test(this.value) && this.value.length !== 0) {
        small.innerHTML = 'Valide'
        small.classList.remove('text__danger')
        small.classList.add('text__success')
        error.innerHTML = ''
    } //Sinon il n'est pas valide 
    else {
        //indique ce qui n'est pas valide 
        small.innerHTML = 'Non Valide : Une adresse mail valide doit être saisie'
        small.classList.remove('text__success')
        small.classList.add('text__danger')
        error.innerHTML = 'Les champs doivent être correctement remplie'
    }
})