import { Router } from "express";

export const router=Router()

router.get("/", (req, res)=>{

    res.status(200).json({
        productos: "productos"
    })
})

router.post("/", (req, res)=>{

    res.status(201).json({
        productos: "El producto fue agregado al carrito"
    })

})



