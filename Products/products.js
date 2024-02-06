

class ProductManager {
            constructor(){
                this.products=[]
            }

            addProduct(title, description, code){
                // VALIDACIONES 
                let productoExistente = this.products.find(newProducts=>newProducts.code===code)
                if(productoExistente){
                    console.log(`El producto con el código ${code} ya existe..!!!`)
                    return
                }

                // ID Único autoincremental...

                let id=1
                if(this.products.length>0){
                    id=this.products[this.products.length-1].id +1
                }

                let nuevoProducto = {id, title, description, code}
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

console.log(newProducts)


let um = new ProductManager()
um.addProduct(
    "Alfombra Felpudo Hello",
    "Medidas: Alto 2cm, Largo 60cm, Ancho 40cm, Material: Coco y Goma",
    "1528OP66"
)
um.addProduct(
    "Difusor Therapie Spicy Cedar",
    "Notas de salida: Cardamomo, Manzana Verde, Notas de cuerpo: Violeta, Rosa",
    "1536HY96"
)
um.addProduct(
    "Dispenser de Jabón Marsella Ambar 250ML",
    "Medidas: Altura 13.50cm, Diámetro 8cm, Capacidad 220ML",
    "1469HJ63"
)

// ARROJA UN ERROR POR QUE EL PRODUCTO CON EL CÓDIGO YA SE ENCUENTRA EN PRODUCT MANAGER
um.addProduct(
    "Dispenser de Jabón Marsella Ambar 250ML",
    "Medidas: Altura 13.50cm, Diámetro 8cm, Capacidad 220ML",
    "1469HJ63"
)

console.log(um.getProducts())

// NOS ARROJA UN ERROR YA QUE NO EXISTE UN PRODUCTO CON ID 4
console.log(um.getProductsById(4))



