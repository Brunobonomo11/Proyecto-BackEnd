import express from 'express'
import { router as productosRouter } from './routes/productos.router.js'
import { router as carritoRouter } from './routes/carrito.router.js'

const PORT = 8080;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/products", productosRouter)
app.use("/api/carts", carritoRouter)


app.get("/", (req, res)=>{
    res.setHeader('Content-Type', 'text/plain')
    res.send("Server activo con Express")
})


app.listen(PORT, ()=>{
    console.log(`Server activo en puerto ${PORT}`)
})