import { Router } from "express";
export const router=Router()

let celulares=[]

router.get("/", (req, res)=>{


    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({celulares})
})

router.post("/", (req, res)=>{
    let {celular}=req.body

    celulares.push(celular)

    res.setHeader('Content-Type', "application/json");
    return res.status(200).json({celularAgregado:celular, celulares})
})