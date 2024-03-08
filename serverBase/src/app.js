import express from 'express'
import { router as productosRouter } from './routes/productos.router.js'
import path from "path"
import __dirname from './utils.js';
import {router as celularesRouter} from './routes/celulares.router.js'
import { upload } from './utils.js';
import handlebars from 'express-handlebars'

const PORT = 8080;

const app=express();

const middleware01=(req, res, next)=>{
    console.log(`pasó x middleware01 !!! - url: ${req.url} - queryParams: ${JSON.stringify(req.query)} - fecha: ${new Date().toUTCString}`)

    next()
}

const middleware02=(req, res, next)=>{
    console.log(`Pasó x middelware02 !!`)
    if(req.query.nombre){
        req.query.nombre=req.query.nombre.toUpperCase()
        if(req.query.nombre==="BRUNO"){
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({error: `El usuario Bruno tiene el acceso temporalmente inhabilitado`})
        }
    }

    req.codigoAgregado=1000

    next()

}

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine("handlebars", handlebars.engine())
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"))


app.get('/', (req, res)=>{

    res.status(200).render("inicio")

})


app.use(middleware01, middleware02, (req, res, next)=>{
    console.log(`middleware activo en servidor !!`)
    next()
})

app.use("/api/products", productosRouter)
app.use("/api/celulares",  celularesRouter)


app.get("/", (req, res)=>{

    let {nombre, color}=req.query
    if(!nombre){
        nombre="invitado"
    }

    if(!color){
        color= "blue"
    }

    res.status(200).render("inicio", {
        nombre, color
    })

})


app.get("/", (req, res)=>{
    res.setHeader('Content-Type', 'text/plain')
    res.send("Server activo con Express")
})

app.get('/prueba', (req, res, next)=>{
    console.log(`Pasó x midd a nivel endpoint`)
    next()
}, (req, res)=>{
    let {nombre}=req.query
    let {codigoAgregado}=req

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        mensaje: "ruta prueba",
        nombre,
        codigoAgregado
    })

})


app.use(express.static(path.join(__dirname, "public")))

app.post("/profile", upload.single("foto"), (req, res)=>{

    let {nombre}=req.body

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({mensaje: `Se cargó la imagen del celular ${nombre} y se guardó en ${req.file.path}`})

})

app.listen(PORT, ()=>{
    console.log(`Server activo en puerto ${PORT}`)
})