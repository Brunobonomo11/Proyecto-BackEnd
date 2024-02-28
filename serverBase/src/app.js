const path = require('path')
const fs = require('fs')
const express =require ("express")
const modulo=require("./newProducts.js")
const ProductManager = require("../Products/products.js")

const PORT=3000

const app=express();

let ruta = path.join(__dirname, 'data', 'usuarios.json')

function getUsers(){
    if(fs.existsSync(ruta)){
        return JSON.parse(fs.readFileSync(ruta, 'utf-8'))
    }else{
        return[]
    }
}

function saveUsers(users){
    fs.writeFileSync(ruta, JSON.stringify(users, null, 5))
}

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res) => {
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK')
})

app.get("/api/usuarios", (req, res) =>{
    let usuarios = getUsers()

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({usuarios});
})

app.post("/api/usuarios", (req, res) =>{

    console.log(req.body)

    let usuarios=getUsers()

    usuarios.push(req.body)

    saveUsers(usuarios)

    res.status(201).json({Datos:req.body})
})

app.get("/", (req, res)=> {

    res.send("Server básico con Express")

})

app.get("/newProducts", (req, res) => {

    let {limit, skip} = req.query

    let resultado=modulo
    if(limit && limit>0){
        resultado=resultado.slice(0, skip)
    }

    if(limit && limit>0){
        resultado=resultado.slice(0, limit)
    }

    res.json(modulo)
})

app.get("datos/:title/:description", (req, res) =>{

    let {title, description} = req.params

    res.send(`Titulo ingresado: ${title} ${description}`) 

})

app.get("/newProducts/LamparaEsfera", (req,res) => {

    res.send("Lampara Page")
})

app.get("/bienvenido", (req, res) => {
    res.send(`<h2 style="color: red;"> Server Básico con Express..!!!<h2>`)
})

app.get("/contacto", (req, res) => {

    console.log(req.query)
    if(req.query.nombre) {
        res.send("Contacto Page"+ req.query.nombre)
    }else {
        res.send("Contacto Page")
    }

})

app.listen(PORT, ()=> {
    console.log(`Server escuchando en puerto ${PORT}`)
})

let producto= new ProductManager("Batería", "Modulo Pantalla")
console.log(producto.saludo())

let Producto04 =new ProductManager("Batería", "Modulo Pantalla")
console.log(Producto04.saludo())