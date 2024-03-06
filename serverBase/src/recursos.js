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