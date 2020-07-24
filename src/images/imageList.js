//Liste des images

const Categories = {
    portrait: {name: "portrait", style: "Portrait"},
    montage: {name: "montage", style: "Montage"},
    paysage: {name: "paysage", style: "Paysage"},
    sneakers: {name: "sneakers", style: "Sneakers"},
    architecture: {name: "architecture", style: "Architecture"},
    lightPainting: {name: "lightPainting", style: "Light Painting"}
}

// Liste des images
// Une image est un objet qui contient
// name : le nom de l'image
// src : le chemin vers la source de l'image
// categories : un tableau contenant les catégories
const ImageList = [
    {name: "Through my phone", src: "https://i.ibb.co/tYZ63VV/see-through-phone-ile-de-re.jpg", categories: [Categories.paysage, Categories.montage]},
    {name: "Red", src: "https://i.ibb.co/t2P43Mm/red.jpg", categories: [Categories.architecture]},
    {name: "AJ3", src: "https://i.ibb.co/XD0JKbd/Jordan-2.jpg", categories: [Categories.sneakers]},
    {name: "Blue", src: "https://i.ibb.co/BZhVgcg/square.jpg", categories: [Categories.architecture]},
    {name: "Pink Sunset", src: "https://i.ibb.co/y6KnZfY/IMG-3878.jpg", categories: [Categories.paysage]},
    {name: "Red and White", src: "https://i.ibb.co/YpMytxS/light-painting.jpg", categories: [Categories.lightPainting]},
]

export default ImageList;