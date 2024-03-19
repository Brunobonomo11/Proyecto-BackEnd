import mongoose from "mongoose";

const productosColl="productos"
const productosSchema= new mongoose.Schema(
    {
        nombre: String,
        email: {
            type: String,
            required:true,
            unique:true
        },
        apellido: String
    },
    {
        timestamps: true
    }

)

export const modeloProductos=moongose.model(productosColl, productosSchema)