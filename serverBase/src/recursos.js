import path from 'path'
import fs from 'fs'

let ruta=path.join(__dirname, 'data', 'productos.json')

function getProductos(){
    if(fs.existsSync(ruta)){
        return JSON.parse(fs.readFileSync(ruta, 'utf-8'))
        }else{
            return[]
        }
}

function saveProducts(products){
    fs.writeFileSync(ruta, JSON.stringify(products, null, 5))
}

export default getProductos

// mongodb+srv://brunobonomo11:Proyectomongo1234@cluster0.fxxkm1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=ProductosNuevos