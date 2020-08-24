class Camera {
    constructor(id, nom, prix, description, urlImg) {
        this.id = id,
        this.nom = nom,
        this.prix = prix,
        this.description = description,
        this.urlImg = urlImg
    }
}
let cameras = [];
const firstCamera = new Camera(1, "Fujifilm X-T200", 499, "Un savoir-faire colorimétrique légendaire !", "images/vcam_1.jpg");
const secondCamera = new Camera(2, "Sony a7S III", 1649, "Enregistrement vidéo professionnel jusqu'à 4K/120p !", "images/vcam_2.jpg");
const thirdCamera = new Camera(3, "Nikon D6", 2999, "Jusqu'a 14 VPS !", "images/vcam_3.jpg");
const fourthCamera = new Camera(4, "Olympus E-M10 MARK IV", 390, "Léger, mobile, facile à utiliser !", "images/vcam_4.jpg");
const fifthCamera = new Camera(5, "Canon 77D", 899, "Léger, mobile, facile à utiliser !", "images/vcam_5.jpg");

cameras.push(firstCamera, secondCamera, thirdCamera, fourthCamera, fifthCamera);

let listeDesProduits = '';

cameras.forEach(cam =>
    listeDesProduits += `
            <tr class="text-center">
              <td class="align-middle">${cam.id}</td>
              <td class="align-middle">${cam.nom}</td>
              <td class="align-middle">${cam.prix}€</td>
              <td class="align-middle">${cam.description}</td>
              <td><img src=${cam.urlImg} class="img-fluid img-thumbnail w-25"></td>
              <td class="align-middle"><button class="btn btn-primary">Détails</button></td>
            </tr>
            `
)



document.getElementById('listedesproduits').innerHTML = listeDesProduits;