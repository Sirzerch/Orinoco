let url = "http://localhost:3000/api/cameras/"

fetch(url).then(response =>
    response.json().then(data => {
        console.log(data);
        let listeDesProduits = '';
        for(let cam of data) {
            listeDesProduits += `
                        <tr class="text-center">
                            <td class="w-25"><img src=${cam.imageUrl} class="img-fluid img-thumbnail"></td>
                            <td class="align-middle">${cam.name}</td>
                            <td class="align-middle">${cam.price}€</td>
                            <td class="align-middle">${cam.description}</td>
                            <td class="align-middle"><a href="#produits" data-id="${cam._id}" class="btn btn-primary pages" role="button" aria-pressed="true">Détails</a></td>
                        </tr>
                        `
        }
        document.getElementById('listedesproduits').innerHTML = listeDesProduits;
    })
).catch((err) => console.log("Erreur" + err));