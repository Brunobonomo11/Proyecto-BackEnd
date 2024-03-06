const express = require("express")
const modulo = require("./datos/productos")
const productos = require("./datos/productos").productos

const PORT = 3000

const app=express()

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


app.listen(PORT, ()=>{
    console.log(`Server activo en puerto ${PORT}`)
})