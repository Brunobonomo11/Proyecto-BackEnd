class ProductManager {
            
            constructor(){
                this.products=[]
            }

            addProduct(title, description, price, thumbnail, code, stock ){

                // VALIDACIONES
                let tituloExistente=this.products.find(newProduct=>newProduct.title===title)
                if(tituloExistente){
                    console.log(`El producto con el titulo ${title} ya existe !!`)
                    return
                }

                let descripcionExistente=this.products.find(newProduct=>newProduct.description===description)
                if(descripcionExistente){
                    console.log(`El producto con la descripción ${description} ya existe !!`)
                    return
                }

                let precioExistente=this.products.find(newProduct=>newProduct.price===price)
                if(precioExistente){
                    console.log(`El producto con el precio ${price} ya existe !!`)
                    return
                }

                let imagenExistente=this.products.find(newProduct=>newProduct.thumbnail===thumbnail)
                if(imagenExistente){
                    console.log(`El producto con la imagen ${thumbnail} ya existe !!`)
                    return
                }

                let codeExistente=this.products.find(newProduct=>newProduct.code===code)
                if(codeExistente){
                    console.log(`El producto con el código ${code} ya existe !!`)
                    return
                }

                let stockExistente=this.products.find(newProduct=>newProduct.stock===stock)
                if(stockExistente){
                    console.log(`El producto con el numero de stock ${stock} ya existe !!`)
                    return
                }

                //ID ÚNICO AUTOINCREMENTAL

                let id=1
                if(this.products.length>0){
                    id=this.products[this.products.length-1].id +1
                }

                let nuevoProducto={id, title, description, price, thumbnail, code, stock, comprador:[]}
                this.products.push(nuevoProducto)
            }

            addComprador(id, nombre, email){
                let indiceProducto=this.products.findIndex(prod=>prod.id===id)
                if(indiceProducto===-1){
                    console.log(`No existen productos con el número de id ${id}`)
                    return
                }

                let existe = this.products[indiceProducto].comprador.find(compra=>compra.email===email)
                if(existe){
                    console.log(`El comprador con email ${email} ya reservó este producto`)
                    return
                }

                this.products[indiceProducto].comprador.push({nombre, email})
            }

            getProducts(){
                return this.products
            }

            getProductsById(id){
                let product=this.products.find(newProduct=>newProduct.id===id)
                if(!product){
                    console.log(`No existen productos con número id ${id} !!!`)
                    return
                }

                return product

            }
}

let nwp = new ProductManager()
nwp.addProduct("Iphone 12", "Pantalla 6.2 pulgadas", "366000", "https://www.macstation.com.ar/img/productos/2492-2317-1.jpg", "IP5263", "20")
nwp.addProduct("Iphone 13", "Pantalla 6.3 pulgadas", "375000", "https://tecnotiendadigital.com/wp-content/uploads/iPHONE-13.jpg", "IP5268", "25")
nwp.addProduct("Iphone 14", "Pantalla 6.4 pulgadas", "405000", "https://digitalapplerd.com/wp-content/uploads/2023/02/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907_inline.jpg.large_.jpg", "IP5269", "22")
nwp.addProduct("Iphone 15", "Pantalla 6.7 pulgadas", "425000", "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/12/iPhone15_Black_PDP_Image_Position-1__MXLA.jpg", "IP5215", "15")
nwp.addProduct("Iphone 15 Pro", "Pantalla 6.0 pulgadas", "425000", "https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/12/iPhone15_Black_PDP_Image_Position-1__MXLA.jpg", "IP5215", "15")

nwp.addComprador(1, "Martin", "Martin5269@outlook.com")
nwp.addComprador(2, "Roberto", "Roberto7269@outlook.com")
nwp.addComprador(3, "Veronica", "Vero5969@outlook.com")
nwp.addComprador(4, "Laura", "Laura5259@outlook.com")
nwp.addComprador(1, "Martin", "Martin5269@outlook.com")

console.log(JSON.stringify(nwp.getProducts(), null, 5))

console.log(nwp.getProductsById(5))


export default ProductManager
