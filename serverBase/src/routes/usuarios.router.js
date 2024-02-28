import {Router} from 'express'
import path from 'path'
import fs from 'fs'
import __dirname from '../utils.js'
import modulo from "../newProducts.js"

// const express =require ("express")

// const router =express.Router()

export const router=Router()

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


router.get("/", (req, res) =>{
    let usuarios = getUsers()

    res.setHeader('Content-Type', 'routerlication/json');
    return res.status(200).json({usuarios});
})

router.put("/:id", (req, res) =>{

    let id=Number(req.params.id)
    if(isNaN(id)){
        return res.status(400).json({error:"El número de id debe ser númerico"})
    }

    let usuarios = getUsers()
    let indiceUsuario=usuarios.findIndex(u=>u.id===id)
    if(indiceUsuario===-1){
        return res.status(400).json({error:"No existen usuarios con ese número de Id"})
    }

    usuarios[indiceUsuario]={
        ...usuarios[indiceUsuario],
        ...req.body,
        id
    }

    saveUsers(usuarios)

    res.setHeader('Content-Type', 'routerlication/json');
    return res.status(200).json({usuarioModificado:usuarios[indiceUsuario]}); 
})

router.post("/", (req, res) =>{

    if(!req.body.nombre){
        return res.status(400).json({
            error:"Es obligatorio completar el nombre"
        })
    }

    console.log(req.body)

    let usuarios=getUsers()

    let id=1
    if(usuarios.length>0){
        id=Math.max(...usuarios.map(d=>d.id))+1
    }

    let nuevoUsuario={
        id,
        ...req.body
    }

    usuarios.push(nuevoUsuario)

    saveUsers(usuarios)

    res.status(201).json({nuevoUsuario})
})

router.get("/", (req, res)=> {

    res.send("Server básico con Express")

})

router.get("/newProducts", (req, res) => {

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

router.get("datos/:title/:description", (req, res) =>{

    let {title, description} = req.params

    res.send(`Titulo ingresado: ${title} ${description}`) 

})

router.get("/newProducts/LamparaEsfera", (req,res) => {

    res.send("Lampara Page")
})

router.get("/bienvenido", (req, res) => {
    res.send(`<h2 style="color: red;"> Server Básico con Express..!!!<h2>`)
})

router.get("/contacto", (req, res) => {

    console.log(req.query)
    if(req.query.nombre) {
        res.send("Contacto Page"+ req.query.nombre)
    }else {
        res.send("Contacto Page")
    }
})