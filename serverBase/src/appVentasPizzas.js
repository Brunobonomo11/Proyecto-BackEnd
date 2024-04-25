import express from 'express'
import mongoose from 'mongoose';

const ventasCol1='ventas'

const ventasEsquma=new mongoose.Schema({
    name:String,
    size:{
        type:String,
        enum:[ 'small', 'medium', 'large'],
        default:"medium"
    },
    price:Number,
    quantity:Number,
    date:Date,
})

const ventasModelo=mongoose.model(ventasCol1, ventasEsquma);

const env=async()=>{
    try {
        await mongoose.connect('mongodb+srv://brunobonomo:jfvsZawoy6AT9olI@cluster0.1xtnzaz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Conexión a DB Establecida');

    }catch (error){
         console.log(`Error en la app: ${error.message}`)
    }
}

env()


const PORT=3000

const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/informe', async(req, res)=> {
    let informe= await ventasModelo.aggregate(
        [
            {
                $match:{size: {$in:["medium", "small"]}}
            },
            {
                $group:{
                    _id: "$name",
                    cantidadTotal:{$sum:"$quantity"}, 
                    precioMax: {$max: "$price"},
                    precioMin: {$min: "$price"},
                    precioPromedio: {$avg: "$price"}
                }
            },
            {
                $sort: {
                    cantidadTotal: -1
                }
            },
            {
                $project: {
                    _id: 0,
                    cantidadTotal:1,
                    precioPromedio:1,
                    info:"ventas febrero 2024",
                    responsable:"marketing",
                    sabor: "$_id"
                }
            },
            {
                $group:{
                    _id:"",
                    detalle: {$push: "$$ROOT"},
                    detalleReducido: {$push: {
                        sabor: "$sabor", cantidad: "$cantidadTotal"
                    }}
                }
            },
            {
                $project:{
                    _id: 0, detalle: 1,
                    titulo: "Ventas febrero 2024",
                    confecciono: "Comision53110"
                }
            }
        ]
    )

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({informe})
})

const server=app.listen(PORT, ()=>{
     console.log(`Server conectado en puerto ${PORT}`)
})