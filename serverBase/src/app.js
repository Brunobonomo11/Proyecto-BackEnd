import express from 'express'
import modulo from './datos/productos.js'
import productos from './datos/productos.js'
import path from 'path'
import fs from 'fs'
import __dirname from './utils.js'



const PORT = 8080;

const app=express();

let ruta=path.join(__dirname, 'data', 'allproducts.json')

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

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res)=>{

    res.send("Server activo con Express")
})


app.get("/productos", (req,res)=>{

    let{limit, skip}=req.query

    let resultado=productos

    if(skip && skip>0){
        resultado=resultado.slice(skip)
    }
    
    
    if(limit && limit>0){
        resultado=resultado.slice(0, limit)
    }


    res.json(resultado)
})

app.get("/productos/:pid", (req, res) =>{
    let {pid}=req.params
    pid=Number(pid)
    if(isNaN(pid)){
        return res.send("El número de Id ingresado tiene que ser de tipo númerico !!")
    }

    let producto=productos.find(producto=>producto.pid===pid)
    if(!producto){
        return res.send(`No existen productos con el número de Id ${pid}`)
    }

    res.send(JSON.stringify(producto))
})


app.get("/bienvenido", (req, res)=>{

    res.send(`<h2 style="color : red;">Bienvenidos a nuestro sitio web de Iphones<h2>`)
})

app.get("/contacto", (req, res)=>{

    console.log(req.query)
    if(req.query.nombre){
        res.send("Pagina de Contacto" + req.query.nombre)

    }else {
        res.send("Pagina de contacto")
    }
})

app.get("/api/products", (req, res)=>{

        let productos = getProductos()

        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({productos})
    
})

app.post("/api/products", (req, res)=>{

    console.log(req.body)
    
    // VALIDACIONES
    let productos =  getProductos()

    //ASIGNAR ID
    let id=1
    if(productos.length>0){
        id=Math.max(...productos.map(p=>p.id))+1
    }

    let nuevoProducto={
        id,
        ...req.body
    }

    productos.push(nuevoProducto)

    saveProducts(productos)

    return res.status(201).json({nuevoProducto});

})

app.listen(PORT, ()=>{
    console.log(`Server activo en puerto ${PORT}`)
})