

class ProductManager {
            constructor(){
                this.products=[]
            }

            addProduct(title, description, code, thumbnail, price){
                // VALIDACIONES 
                
                let tituloExistente = this.products.find(newProducts=>newProducts.title===title)
                if(tituloExistente){
                    console.log(`El producto con el precio ${title} ya existe..!!!`)
                    return
                }
                
                let productoExistente = this.products.find(newProducts=>newProducts.code===code)
                if(productoExistente){
                    console.log(`El producto con el código ${code} ya existe..!!!`)
                    return
                }

                let imagenExistente = this.products.find(newProducts=>newProducts.thumbnail===thumbnail)
                if(imagenExistente){
                    console.log(`El producto con la imagen ${thumbnail} ya existe..!!!`)
                    return
                }

                let precioExistente = this.products.find(newProducts=>newProducts.price===price)
                if(precioExistente){
                    console.log(`El producto con el precio ${price} ya existe..!!!`)
                    return
                }

                let descriptionExistente = this.products.find(newProducts=>newProducts.description===description)
                if(descriptionExistente){
                    console.log(`El producto con la descripción ${description} ya existe..!!!`)
                    return
                }


                // ID Único autoincremental...

                let id=1
                if(this.products.length>0){
                    id=this.products[this.products.length-1].id +1
                }

                let nuevoProducto = {id, title, description, code, thumbnail, price};
                this.products.push(nuevoProducto)

            }

            getProducts(){
                return this.products
            }

            getProductsById(id){
                let producto=this.products.find(u=>u.id===id)
                if(!producto){
                    console.log(`No existen productos con Id ${id}..!!`)
                }

                return producto
            }

            saludo(){
                return `El producto ${this.title} tiene un precio de ${this.price} !`
            }
}

let newProducts=[]
newProducts.push({
    title: "Lampara Esfera con Pie Simil Madera",
    description: "Medidas Altura: 40cm, Diámetro: 13.50cm, Incluye USB",
    price: "59990",
    thumbnail: "https://acdn.mitiendanube.com/stores/898/220/products/207eccd0-7593-41f0-bc4d-87ad84f49b98-731c1fa5a16e81623c17060227937247-1024-1024.webp",
    code: "1234AZ56",
    stock: "15"
})
newProducts.push({
    title: "Lampara de baja Black",
    description: "Medidas Bandeja Chica Altura: 14cm, Diámetro: 11cm, Incluye USB",
    price: "19990",
    thumbnail: "https://acdn.mitiendanube.com/stores/898/220/products/2b3d93da-39a3-4dff-8872-8f32872c15db-8529b29acca133fa3717048922471319-1024-1024.webp",
    code: "234AZ78",
    stock: "12"
})
newProducts.push({
    title: "Lampara de hierro Black",
    description: "Medidas Altura: 36cm, Diámetro: 8.50cm, Incluye USB, 3 intensidades de luz",
    price: "32390",
    thumbnail: "https://acdn.mitiendanube.com/stores/898/220/products/42b8bc00-77ce-4cac-90eb-a90a3679afef-9c88b85d5ecce36e5917036060949373-1024-1024.webp",
    code: "1234AZ90",
    stock: "18"
})
newProducts.push({
    title: "Lampara de hierro Black",
    description: "Medidas Altura: 36cm, Diámetro: 8.50cm, Incluye USB, 3 intensidades de luz",
    price: "32390",
    thumbnail: "https://acdn.mitiendanube.com/stores/898/220/products/42b8bc00-77ce-4cac-90eb-a90a3679afef-9c88b85d5ecce36e5917036060949373-1024-1024.webp",
    code: "1234AZ90",
    stock: "18"
})

console.log(newProducts)


let um = new ProductManager()
um.addProduct(
    "Alfombra Felpudo Hello",
    "Medidas: Alto 2cm, Largo 60cm, Ancho 40cm, Material: Coco y Goma",
    "1528OP66",
    "https://acdn.mitiendanube.com/stores/898/220/products/40431025-fe5d-40c6-b67a-f4cd07c5c95e-6a8a5eb51fd06fd98a17012692474216-1024-1024.webp",
    "15500"
)
um.addProduct(
    "Difusor Therapie Spicy Cedar",
    "Notas de salida: Cardamomo, Manzana Verde, Notas de cuerpo: Violeta, Rosa",
    "1536HY96",
    "https://acdn.mitiendanube.com/stores/898/220/products/3f4cb15c-ea97-4ded-9af6-b6d91cf1db89-c6136101c4fb6ea23416986844884822-1024-1024.webp",
    "17600"
)
um.addProduct(
    "Dispenser de Jabón Marsella Ambar 250ML",
    "Medidas: Altura 13.50cm, Diámetro 8cm, Capacidad 220ML",
    "1469HJ63",
    "https://acdn.mitiendanube.com/stores/898/220/products/879a7f56-0536-40cd-b547-e65168d8b4f1-ae3d9f58c5244f55c917011907477466-1024-1024.webp",
    "25600"
)

// ARROJA UN ERROR POR QUE EL PRODUCTO CON EL CÓDIGO YA SE ENCUENTRA EN PRODUCT MANAGER
um.addProduct(
    "Dispenser de Jabón Marsella Ambar 250ML",
    "Medidas: Altura 13.50cm, Diámetro 8cm, Capacidad 220ML",
    "1469HJ63",
    "https://acdn.mitiendanube.com/stores/898/220/products/879a7f56-0536-40cd-b547-e65168d8b4f1-ae3d9f58c5244f55c917011907477466-1024-1024.webp",
    "25600"
)

console.log(um.getProducts())

// NOS ARROJA UN ERROR YA QUE NO EXISTE UN PRODUCTO CON ID 4
console.log(um.getProductsById(4))


// SINCRONAS & ASINCRONAS


// const suma=(a,b)=>a+b
// const llamaSuma=()=> {
//     console.log(suma(5,5))
// }

// console.log("inicio")

// console.log("algo...")

// console.log("Va a iniciar el for...")
// console.time("Demora for:")
// for(let i=0; i<5_000_000_000; i++){
//     suma(4,4)
// }
// console.timeEnd("Demora for:")

// llamaSuma()

// console.log("fin")

// setTimeout(() => {
//     console.log("log a los 0seg...!!!")
// }, 0); 

// setTimeout(() => {
//     console.log("log a los 3seg...!!!")
// }, 3000);

let numeros=[1,2,3,4,5]
let cuadrados=numeros.map(a=>a**2)
console.table({numeros, cuadrados})

function calculaCuadrados(a){
    return a*a
}

cuadrados=numeros.map(calculaCuadrados)
console.table({numeros, cuadrados})

const miMap = (arreglo=[], fnCallback)=> {
    let resultado =[]

    for(let i=0; i<arreglo.length; i++){
        let valor=fnCallback(arreglo[i])
        resultado.push(valor)
    }

    return resultado
}

cuadrados=miMap(numeros, a=>a**2)
console.table({numeros, cuadrados})

const operar =(a, b, fnCallback)=> {
    if(typeof a!=="number" || typeof b!=="number"){
        return fnCallback(new Error("Solo se admiten argumentos numerios para a y b"))
    }
    return fnCallback(null, a, b)
}

console.log(operar(10, 5, (err, a,b) => {
    if(err) {
        return "Algo ocurrió..!!! ERROR...!!!"
    }else {
        return a*b
    }
}))

console.log(operar(10, "Camila", (err, a, b)=> {
    if(err) {
        return "Algo ocurrió..!!! ERROR...!!!"
    }else {
        return a*b
    }
}))

export default ProductManager
