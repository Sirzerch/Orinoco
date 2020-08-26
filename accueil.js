class Camera {
    constructor(urlImg, nom, prix, description) {
        this.urlImg = urlImg
        this.nom = nom,
        this.prix = prix,
        this.description = description
    }
}
let cameras = [];
const firstCamera = new Camera("images/vcam_1.jpg", "Fujifilm X-T200", 499, "Un savoir-faire colorimétrique légendaire !");
const secondCamera = new Camera("images/vcam_2.jpg", "Sony a7S III", 1649, "Enregistrement vidéo professionnel jusqu'à 4K/120p !");
const thirdCamera = new Camera("images/vcam_3.jpg", "Nikon D6", 2999, "Jusqu'a 14 VPS !");
const fourthCamera = new Camera("images/vcam_4.jpg", "Olympus E-M10 MARK IV", 390, "Léger, mobile, facile à utiliser !");
const fifthCamera = new Camera("images/vcam_5.jpg", "Canon 77D", 899, "Léger, mobile, facile à utiliser !");

cameras.push(firstCamera, secondCamera, thirdCamera, fourthCamera, fifthCamera);

let listeDesProduits = '';

cameras.forEach(cam =>
    listeDesProduits += `
            <tr class="text-center">
                <td class="w-25"><img src=${cam.urlImg} class="img-fluid img-thumbnail"></td>
                <td class="align-middle">${cam.nom}</td>
                <td class="align-middle">${cam.prix}€</td>
                <td class="align-middle">${cam.description}</td>
                <td class="align-middle"><button class="btn btn-primary mt-2 mb-2" onClick='details'>Détails</button></td>
            </tr>
            `
)

document.getElementById('listedesproduits').innerHTML = listeDesProduits;