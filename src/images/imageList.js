//Liste des images

const Categories = {
    portrait: {name: "portrait", style: "Portrait"},
    paysage: {name: "paysage", style: "Paysage"},
}

// Liste des images
// Une image est un objet qui contient
// name : le nom de l'image
// src : le chemin vers la source de l'image
// categories : un tableau contenant les catégories
const ImageList = [
    {name: "Through my phone", src: "https://i.ibb.co/tYZ63VV/see-through-phone-ile-de-re.jpg", categories: [Categories.portrait]},
    {name: "Red", src: "https://i.ibb.co/t2P43Mm/red.jpg", categories: [Categories.portrait]},
    {name: "Redddd", src: "https://i.ibb.co/t2P43Mm/red.jpg", categories: [Categories.portrait]}
]

export default ImageList;