import express from "express"
import { router as usuariosRouter } from './routes/usuarios.router.js'
import ProductManager from "../Products/products.js"


const PORT=3000

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/usuarios", usuariosRouter)

app.get('/', (req,res) => {
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK')
})

app.listen(PORT, ()=> {
    console.log(`Server escuchando en puerto ${PORT}`)
})

let producto= new ProductManager("Batería", "Modulo Pantalla")
console.log(producto.saludo())

let Producto04 =new ProductManager("Batería", "Modulo Pantalla")
console.log(Producto04.saludo())