import { Router } from "express";
import { CelularesManager } from "../classes/CelularesManager.js";
import { rutaProductos } from "../utils.js";
import productos from "../datos/productos.js";

export const router=Router()

let celularesManager = new  CelularesManager(rutaProductos);

router.get('/', (req, res)=>{

    res.status(200).render("inicio")
})

router.get('/products', (req, res) =>{


    res.status(200).render("products")
})

router.get('/pruebas', (req, res)=>{
    
    res.status(200).render("pruebas")
})

router.get('/chat', (req, res)=>{

    res.status(200).render('chat')
})

router.get('/registro', (req, res)=>{

    res.status(200).render('home')
})