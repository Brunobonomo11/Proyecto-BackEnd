import mongoose from 'mongoose';

const app2 = async()=>{

    const cursosModelo=mongoose.model(
        "cursos",
        new mongoose.Schema(
            {
                nombre: String, horas: Number,
                docente: String
            },
            {
                timestamps: true
            }
        )
    )

    const estudianteEsquema=new mongoose.Schema(
        {
            nombre: String, email:{type:String, unique:true},
            cursando:{
                type:[
                    {
                        curso:{
                            type: mongoose.Schema.Types.ObjectId,
                            ref:"cursos"
                        }
                    }
                ]
            }
        },
        {
            timestamps: true
        }
    )

    const estudiantesModelo=mongoose.model("estudiantes", estudianteEsquema)

    // Borrar Datos
    // await cursosModelo.deleteMany({})
    // await estudiantesModelo.deleteMany({})

    let curso01= await cursosModelo.create({
        nombre: "Calculo II",
        horas: 8,
        docente: "Juan Perez"
    })

    let curso02= await cursosModelo.create({
        nombre: "Base de Datos I",
        horas: 4,
        docente: "Marcelo Gomez"
    })

    let estudiante= await estudiantesModelo.create(
        {
            nombre:"Luis Alberto", email:"luisalberto@gmail.com",
            cursando: [{curso:curso01._id}, {curso:curso02._id}]
        }
    )

    console.log({curso01, curso02})
    console.log(JSON.stringify(estudiante, null, 5))

    // process.exit() // FINALIZA EL SCRIPT

} // FIN APP2()

app2()