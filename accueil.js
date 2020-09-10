let urlAccueil = "http://localhost:3000/api/cameras/"

fetch(urlAccueil).then(response =>
    response.json().then(data => {

        for (let cam of data) {

            let $ = function (selector) {
                return document.querySelector(selector);
            };

            let tr = document.createElement('tr')
            $('#listedesproduits').appendChild(tr)
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

            let a = document.createElement('a')
            td5.append(a)
            a.className = 'btn btn-primary pages'
            a.setAttribute('role', 'button')
            a.setAttribute('aria-pressed', 'true')
            a.innerHTML = 'Détails'
            a.setAttribute('data-button', `${cam._id}`)

            img.src = `${cam.imageUrl}`

            td2.innerHTML = `${cam.name}`

            td3.innerHTML = `${cam.price}`

            td4.innerHTML = `${cam.description}`

            a.setAttribute('href', `#`)
        }

        let getIds = document.querySelectorAll('#listedesproduits #tr a')

        for (let getId of getIds) {
            getId.addEventListener('click', function () {
                let num = this.getAttribute('data-button')

                localStorage.setItem("ids", num);

                const getItem = localStorage.getItem("ids");

                const page = document.getElementsByTagName('a')
                const pageProduit = page[1]
                pageProduit.click()

                let url = `http://localhost:3000/api/cameras/${getItem}`

                fetch(url).then(response =>
                    response.json().then(data => {

                        let $ = function (selector) {
                            return document.querySelector(selector);
                        };

                        let tr = document.createElement('tr')
                        $('#produit').appendChild(tr)
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

                        let a = document.createElement('a')
                        td5.append(a)
                        a.className = 'btn btn-primary pages'
                        a.setAttribute('role', 'button')
                        a.setAttribute('aria-pressed', 'true')
                        a.innerHTML = 'Ajouter au panier'

                        img.src = `${data.imageUrl}`

                        td2.innerHTML = `${data.name}`

                        td3.innerHTML = `${data.price}`

                        td4.innerHTML = `${data.description}`

                        a.setAttribute('href', `#`)
                    })
                ).catch((err) => console.log("Erreur" + err));
            })
        }
    })
).catch((err) => console.log("Erreur" + err));
