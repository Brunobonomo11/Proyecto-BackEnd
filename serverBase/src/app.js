const express= require("express")
const modulo=require("./newProducts")

const PORT=3000

const app=express()

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


app.listen(PORT, ()=>{
    console.log(`Server OK en puerto ${PORT}`)
})