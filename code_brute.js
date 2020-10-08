let urlAccueil = "http://localhost:3000/api/cameras/"


fetch(urlAccueil).then(response =>
    response.json().then(data => {

        // 1ere page (Accueil)

        for (let cam of data) {

            let $ = function (selector) {
                return document.querySelector(selector);
            };

            let tr = document.createElement('tr')
            $('#listedesproduits').appendChild(tr)
            tr.className = 'text-center'
            tr.setAttribute('data-tr', 'tr')

            let td1 = document.createElement('td')
            let td2 = document.createElement('td')
            let td3 = document.createElement('td')
            let td4 = document.createElement('td')
            let td5 = document.createElement('td')
            tr.append(td1, td2, td3, td4, td5)

            td1.setAttribute('data-td', 'td' + 1)
            td2.setAttribute('data-td', 'td' + 2)
            td3.setAttribute('data-td', 'td' + 3)
            td4.setAttribute('data-td', 'td' + 4)
            td5.setAttribute('data-td', 'td' + 5)

            td1.className = 'w-25'
            td2.className = 'align-middle'
            td3.className = 'align-middle'
            td4.className = 'align-middle'
            td5.className = 'align-middle'

            let img = document.createElement('img')
            td1.append(img)

            img.className = 'img-fluid img-thumbnail'

            let a = document.createElement('a')
            td5.append(a)
            a.className = 'btn btn-primary pages'
            a.setAttribute('role', 'button')
            a.setAttribute('aria-pressed', 'true')
            a.innerHTML = 'Détails'
            a.setAttribute('data-button', `${cam._id}`)

            img.src = `${cam.imageUrl}`

            td2.innerHTML = `${cam.name}`

            td3.innerHTML = `${cam.price}£`

            td4.innerHTML = `${cam.description}`

            a.setAttribute('href', `#`)
        }
        // 2eme page (produit)

        let getIds = document.querySelectorAll('#listedesproduits #tr a')

        let p = document.createElement('p')
        document.querySelector('#produit').appendChild(p)
        p.setAttribute('style', 'height: 60vh')
        p.className = 'text-muted d-flex align-items-center justify-content-center'
        p.innerHTML = "Aucun produit n'a été sélectionné"

        for (let getId of getIds) {
            getId.addEventListener('click', function () {
                let num = this.getAttribute('data-button')

                localStorage.setItem("ids", num);

                const getItem = localStorage.getItem("ids");

                const page = document.getElementsByTagName('a')
                const pageProduit = page[1]
                pageProduit.click()

                document.querySelector('#produit').innerHTML = ""

                let url = `http://localhost:3000/api/cameras/${getItem}`

                fetch(url).then(response => 
                    response.json().then(data => {

                        let $ = function (selector) {
                            return document.querySelector(selector);
                        };

                        let firstDiv = document.createElement('div')
                        $('#produit').append(firstDiv)
                        firstDiv.className = "card mt-3 mr-4 ml-4"
                        firstDiv.setAttribute('style', 'max-width: 5000px;')

                        let secondDiv = document.createElement('div')
                        firstDiv.append(secondDiv)
                        secondDiv.className = "row no-gutters"

                        let thirdDiv = document.createElement('div')
                        secondDiv.append(thirdDiv)
                        thirdDiv.className = "col-md-4"

                        let img = document.createElement('img')
                        thirdDiv.append(img)
                        img.src = `${data.imageUrl}`
                        img.className = "card-img"
                        img.alt = "Appareil photo"

                        let thirdDivBis = document.createElement('div')
                        secondDiv.append(thirdDivBis)
                        thirdDivBis.className = 'col-md-8'

                        let fourthDiv = document.createElement('div')
                        thirdDivBis.append(fourthDiv)
                        fourthDiv.className = 'card-body'

                        let cardTitle = document.createElement('h5')
                        fourthDiv.append(cardTitle)
                        cardTitle.className = 'card-title'
                        cardTitle.innerHTML = `${data.name}`

                        let cardText1 = document.createElement('p')
                        fourthDiv.append(cardText1)
                        cardText1.className = 'card-text'
                        cardText1.innerHTML = `${data.price}£`

                        let cardText2 = document.createElement('p')
                        fourthDiv.append(cardText2)
                        cardText2.className = 'card-text'
                        cardText2.innerHTML = `${data.description}`

                        let cardText3 = document.createElement('label')
                        fourthDiv.append(cardText3)
                        cardText3.setAttribute('for', 'lentilles')
                        cardText3.setAttribute('style', 'margin-right: 10px')
                        cardText3.className = 'card-text'
                        cardText3.innerHTML = 'Lentilles : '

                        let cardMenu = document.createElement('select')
                        fourthDiv.append(cardMenu)
                        cardMenu.className = 'lentilles'
                        cardMenu.setAttribute('id', 'lentilles')

                        let cardMenuValue1 = document.createElement('option')
                        cardMenu.append(cardMenuValue1)
                        cardMenuValue1.value = `${data.lenses}`
                        cardMenuValue1.innerHTML = `${data.lenses[0]}`

                        let cardMenuValue2 = document.createElement('option')
                        cardMenu.append(cardMenuValue2)
                        cardMenuValue2.value = `${data.lenses}`
                        cardMenuValue2.innerHTML = `${data.lenses[1]}`

                        let cardMenuValue3 = document.createElement('option')
                        cardMenu.append(cardMenuValue3)
                        cardMenuValue3.value = `${data.lenses}`
                        cardMenuValue3.innerHTML = `${data.lenses[2]}`

                        let cardText4 = document.createElement('a')
                        fourthDiv.append(cardText4)
                        cardText4.className = 'btn btn-warning'
                        cardText4.setAttribute('style', 'position: absolute; top: 15px; right: 15px;')
                        cardText4.setAttribute('data-panier', `${data._id}`)
                        cardText4.setAttribute('href', '#')
                        cardText4.innerHTML = 'Ajouter au panier +' 
                    })    
                ).catch((err) => console.log("Erreur" + err));
            })
        }

        // 3eme page (Panier)
        let getPaniers = document.querySelectorAll('#produit a')
        console.log(getPaniers)

        // let p = document.createElement('p')
        // document.querySelector('#produit').appendChild(p)
        // p.setAttribute('style', 'height: 60vh')
        // p.className = 'text-muted d-flex align-items-center justify-content-center'
        // p.innerHTML = "Aucun produit n'a été sélectionné"

        for (let getPanier of getPaniers) {
            getPanier.addEventListener('click', function () {
                let numPanier = this.getAttribute('data-panier')

                localStorage.setItem("panier", numPanier);

                const getPanier = localStorage.getItem("panier");

                const page = document.getElementsByTagName('a')
                const pageProduit = page[2]
                pageProduit.click()

                // document.querySelector('#produit').innerHTML = ""

                let url = `http://localhost:3000/api/cameras/${getPanier}`

                fetch(url).then(response => 
                    response.json().then(data => {
                        let $ = function (selector) {
                            return document.querySelector(selector);
                        };
            
                        let tr = document.createElement('tr')
                        $('#panier').appendChild(tr)
                        tr.className = 'text-center'
                        tr.setAttribute('id', 'tr')
            
                        let td1 = document.createElement('td')
                        let td2 = document.createElement('td')
                        let td3 = document.createElement('td')
                        let td4 = document.createElement('td')
                        let td5 = document.createElement('td')
                        tr.append(td1, td2, td3, td4, td5)
            
                        td1.setAttribute('id', 'td' + 1)
                        td2.setAttribute('id', 'td' + 2)
                        td3.setAttribute('id', 'td' + 3)
                        td4.setAttribute('id', 'td' + 4)
                        td5.setAttribute('id', 'td' + 5)
            
                        td1.className = 'w-25'
                        td2.className = 'align-middle'
                        td3.className = 'align-middle'
                        td4.className = 'align-middle'
                        td5.className = 'align-middle'
            
                        let img = document.createElement('img')
                        td1.append(img)
            
                        img.className = 'img-fluid img-thumbnail'
            
                        img.src = `${data.imageUrl}`
            
                        td2.innerHTML = `${data.name}`
            
                        td3.innerHTML = `${data.price}£`
            
                    })
                ).catch((err) => console.log("Erreur" + err));
            })
        }        
    })
).catch((err) => console.log("Erreur" + err));
