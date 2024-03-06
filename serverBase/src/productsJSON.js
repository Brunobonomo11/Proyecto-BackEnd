const fs= require("fs")

let rutaArchivo="./archivojson/productos.json"
let productos = [
    {
        id: 1,
        title: "Iphone 12",
        description: "Pantalla 6.1 pulgadas",
        price: "349000",
        thumbnail: "https://www.macstation.com.ar/img/productos/2492-2317-1.jpg",
        code: "IP1269",
        stock: "15"
    },
    {
        id: 2,
        title: "Iphone 13",
        description: "Pantalla 6.3 pulgadas",
        price: "375000",
        thumbnail: "https://tecnotiendadigital.com/wp-content/uploads/iPHONE-13.jpg",
        code: "IP1368",
        stock: "12"
    },
    {
        id: 3,
        title: "Iphone 14",
        description: "Pantalla 6.5 pulgadas",
        price: "396000",
        thumbnail: "https://digitalapplerd.com/wp-content/uploads/2023/02/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large_.jpg",
        code: "IP1465",
        stock: "10"
    },
    {
        id: 4,
        title: "Iphone 15",
        description: "Pantalla 6.8 pulgadas",
        price: "456000",
        thumbnail: "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/12/iPhone15_Black_PDP_Image_Position-1__MXLA.jpg",
        code: "IP1560",
        stock: "18"
    },
    {
        id: 5,
        title: "Iphone 15 Pro Max",
        description: "Pantalla 6.9 pulgadas",
        price: "563000",
        thumbnail: "https://http2.mlstatic.com/D_NQ_NP_912227-MLA71782903150_092023-O.webp",
        code: "IP1570",
        stock: "8"
    }
];

const updateProduct=(prop, valor)=>{
    if(prop==="title"){
        return valor.toUpperCase()
    }

    return valor
}

let productosTexto=JSON.stringify(productos, updateProduct, 3)
console.log(productosTexto, typeof productosTexto)

fs.writeFileSync(rutaArchivo, JSON.stringify(productos, null, "\t"))

let datoLeido=JSON.parse(fs.readFileSync(rutaArchivo, {encoding:"utf-8"}))
console.log(datoLeido[0].title)
console.log(datoLeido, typeof datoLeido)

