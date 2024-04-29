import express from 'express'
import { router as productosRouter } from './routes/productos.router.js'
import path from "path"
import __dirname from './utils.js';
import {router as celularesRouter} from './routes/celulares.router.js'
import { upload } from './utils.js';
import handlebars from 'express-handlebars'
import { router as sessionsRouter } from  './routes/sessions.router.js'
import { router as vistasRouter } from './routes/vistas.router.js'
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cookieParser from "cookie-parser"
import session from 'express-session'
import FileStore from "session-file-store"
import { auth } from  './middlewares/auth.js'
import { inicializaPassport } from './config/passport.config.js';
import passport from 'passport';
import { initPassport } from './config/passport.config.js';

const PORT = 8080;

const app=express();
const fileStore=FileStore(session)

let serverSocket;

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
app.use(cookieParser())
app.use(session(
    {
        secret:"CoderCoder123",
        resave: true,
        saveUninitialized: true,
        store: new fileStore (
            {
                path: "./src/sessions",
                ttl: 300,
                retries: 0
            }
        )
    }
))

inicializaPassport()
app.use(passport.initialize())
app.use(passport.session())

initPassport()
app.use(passport.initialize())
app.use(passport.session())

app.use("/api/sessions", sessionsRouter)

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
app.use("/", vistasRouter)
// app.use("/api/heroes", heroesRouter)


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

app.get('/sessionmsj', (req,res)=> {

    let mensaje = "Bienvenido"
    if(req.session.contador){
        req.session.contador++
        mensaje+=`. Visitas a esta ruta: ${req.session.contador}`
    }else{
        req.session.contador=1;
    }
    
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})


let usuarios24=[
    {
        nombre:'Diego', password:123, 
        rol: 'usuario'
    },
    {
        nombre:'Laura', password:123, 
        rol: 'usuario'
    },
    {
        nombre:'Admin', password:'codercoder', 
        rol: 'admin'
    },
]


app.get('/login', (req, res)=> {
    let {nombre, password}= req.query
    if(!nombre || !password) {
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error: "Complete los datos"})
    }

    let usuario=usuarios.find(u=>u.nombre===nombre && u.password==password)
    if(!usuario){
        res.setHeader('Content-Type', 'application/json');
        return res.status(403).json({error: 'Credenciales incorrectas'})
    }

    req.session.usuario=usuario

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Login Exitoso", usuario});
})


app.get("/logout", (req, res)=>{
    req.session.destroy(error=>{
        if(error){
            cconsole.log(error)
            res.setHeader('Content-Type', 'application/json');
            return res.status(500).json({
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            })
        }
    })
})


app.get('/datos', auth, (req, res)=> {

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        datos:"ruta datos..."
    })
})

app.get('/imagenes', auth, (req, res)=>{

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
        datos:"ruta imagenes..."
    })

})


app.get('/Setcookies', (req, res)=>{

    let info={
        nombre: "Juan", them:"dark", fontSize: 18
    }
    
    res.cookie("cookie01", info)
    res.cookie("cookie02conVencimiento", info, {maxAge: 1000*5})
    res.cookie("cookie03conVencimiento", info, {maxAge: 1000*5})

    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({
        message: "Cookies Generadas.. !!!"
    })
})

app.get("/getcookies", (req,res)=>{
    
    console.log(req.headers.cookie)

    let cookies=req.cookies

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({cookies})
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

const serverHttp=app.listen(PORT, ()=>{ // HTTP SERVER
    console.log(`Servidor activo en puerto ${PORT}`)
})

let mensajes=[]
let usuarios=[]

serverSocket = new Server(serverHttp)

serverSocket.on("connection", socket=> {
    console.log(`Se ha conectado un cliente con id ${socket.id}`)
    socket.emit("saludo", {emisor:"Server", mensaje:"Bienvenido al server !!"})

    socket.on("presentacion", nombre=>{
        usuarios.push({id:socket.id, nombre})
        socket.emit("historial", mensajes)
        socket.broadcast.emit("nuevoUsuario", nombre)
    })

    socket.on("mensaje", (nombre, mensaje)=>{
        mensajes.push({nombre, mensaje})
        serverSocket.emit("nuevoMensaje", nombre, mensaje)
    })

    socket.on("disconnect", ()=>{
        let nombre=usuarios.find(u=>u.id===socket.id)
        if(nombre){
            socket.broadcast.emit("saleUsuario", nombre)
        }
    })
})

setInterval(() =>{
    let temperatura=Math.floor(Math.random()*(5)+28)
    serverSocket.emit("temperatura", temperatura)
}, 1000);

const connect=async()=>{
    try {
        await mongoose.connect("mongodb+srv://brunobonomo11:Proyectomongo1234@cluster0.fxxkm1c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=ProductosNuevos")
        console.log("DB Online !!")
    } catch (error) {
        console.log("Fallo conexion Detalle: ", error.message)
    }
}

