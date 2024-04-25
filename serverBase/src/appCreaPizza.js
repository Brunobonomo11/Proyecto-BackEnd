import mongoose from "mongoose";

const ventas=[
    {
        name:"Pepperoni", size:"small", price:19,
        quantity:10, date:"2023-01-02"
    },
    {
        name:"Pepperoni", size:"medium", price:20,
        quantity:20, date:"2023-01-02"
    },
    {
        name:"Pepperoni", size:"large", price:21,
        quantity:30, date:"2023-01-02"
    },
    {
        name:"Cheese", size:"small", price:12,
        quantity:15, date:"2023-01-02"
    },
    {
        name:"Cheese", size:"medium", price:13,
        quantity:25, date:"2023-01-02"
    },
    {
        name:"Cheese", size:"large", price:14,
        quantity:35, date:"2023-01-02"
    }
];

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

        await ventasModelo.deleteMany({});
        await ventasModelo.insertMany(ventas)
        console.log("Coleccion ventas creada.. !!! ")
        process.exit()
    }catch (error){
         console.log(`Error en la app: ${error.message}`)
    }
}

env()