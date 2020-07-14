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
    {name: "Lights", src: "../assets/next.png", categories: [Categories.portrait]},
    {name: "Rooftops", src: "../assets/next.png", categories: [Categories.portrait]}
]

export default ImageList;