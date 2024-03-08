import { Router } from "express";
import productos from '../datos/productos.js'
import path from 'path'
import fs from 'fs'
import __dirname from '../utils.js'

// import  express  from "express";
// export const router=express.Router()

export const router = Router()


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


router.get("/productos", (req,res)=>{

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



router.get("/productos/:pid", (req, res) =>{
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



router.get("/bienvenido", (req, res)=>{

    res.send(`<h2 style="color : red;">Bienvenidos a nuestro sitio web de Iphones<h2>`)
})


router.get("/contacto", (req, res)=>{

    console.log(req.query)
    if(req.query.nombre){
        res.send("Pagina de Contacto" + req.query.nombre)

    }else {
        res.send("Pagina de contacto")
    }
})


router.get("/", (req, res)=>{

        let productos = getProductos()

        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({productos})
    
})

router.post("/", (req, res)=>{

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


router.get("/:id", (req, res)=>{

    let id = Number(req.params.id)
    if(isNaN(id)){
        return res.status(400).json({error: "El número de Id debe ser numerico"})
    }

    let productos = getProductos()
    let producto=productos.find(p=>p.id===id)
    if(!producto){
        return res.status(400).json({error: `No existen productos con número de Id ${id}` })
    }

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({producto})

})



router.put("/:id", (req, res)=>{

    let id = Number(req.params.id)
    if(isNaN(id)){
        return res.status(400).json({error: "El número de Id debe ser numerico"})
    }

    let productos = getProductos()
    let indiceProducto=productos.findIndex(p=>p.id===id)
    if(!indiceProducto===-1){
        return res.status(400).json({error: `No existen productos con número de Id ${id}` })
    }

    productos[indiceProducto]={
        ...productos[indiceProducto],
        ...req.body,
        id
    }

    saveProducts(productos)


    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({productoModificado:productos[indiceProducto]})

})


router.delete("/:id", (req, res)=>{

    let id = Number(req.params.id)
    if(isNaN(id)){
        return res.status(400).json({error: "El número de Id debe ser numerico"})
    }

    let productos = getProductos()
    let indiceProducto=productos.findIndex(p=>p.id===id)
    if(!indiceProducto===-1){
        return res.status(400).json({error: `No existen productos con número de Id ${id}` })
    }

    productos[indiceProducto]={
        ...productos[indiceProducto],
        ...req.body,
        id
    }

    let productoEliminado=productos[indiceProducto]
    productos.splice(indiceProducto, 1)

    saveProducts(productos)


    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({productoEliminado})


})