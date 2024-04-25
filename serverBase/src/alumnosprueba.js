import mongoose from "mongoose"

let alumnoEsquema=new mongoose.Schema({
    codigo: Number,
    nombre:String,
    apellido: String,
    email:String,
    estudios: String,
    origen:String,
    promedio: Number
}, {collection: 'bigAlumnos'})

alumnoEsquema.index({nombre: -1})
alumnoEsquema.index({nombre: -1, apellido: -1})

let alumnoModelo=mongoose.model('alumnos', alumnoEsquema)

const entorno=async()=>{
    try {
        await mongoose.connect("mongodb+srv://brunobonomo:jfvsZawoy6AT9olI@cluster0.1xtnzaz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('Conexion a DB establecida')

        let resultado= await alumnoModelo.find({nombre: "Morena"})
        console.log(JSON.stringify(resultado, null, 5))
    } catch (error) {
        console.log(error.message)
    }

}

entorno()