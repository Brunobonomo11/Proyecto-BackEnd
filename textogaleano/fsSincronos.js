const fs=require('fs')
const { type } = require('os')

// fs.readFileSync
// fs.readFile
// fs.promises.readFile

let rutaArchivo = "../textogaleano/texto.txt"
let texto1 = `El escritor uruguayo Eduardo Galeano (1940-2015) fue un autor prolífico, que se especializó no sólo en la denuncia, sino también en condensar a veces en algunos párrafos la historia de América latina y el mundo. Acá algunos textos escogidos de sus obras.

«A diferencia de la solidaridad, que es horizontal y se ejerce de igual a igual, la caridad se practica de arriba-abajo, humilla a quien la recibe y jamás altera ni un poquito las relaciones de poder».
(Patas arriba)

«Ahora las torturas se llaman 'apremios ilegales'. La traición se llama "realismo". El oportunismo se llama 'pragmatismo'. El imperialismo se llama Globalización. Y a las víctimas del imperialismo se las llama 'países en vía de desarrollo'». (Patas arriba).`

// fs.writeFileSync (rutaArchivo, texto1, {encoding:"utf8"})
fs.writeFileSync(rutaArchivo, texto1)
let lecturaArchivo=fs.readFileSync(rutaArchivo, {encoding:"utf-8"})
console.log(lecturaArchivo)

if(fs.existsSync(rutaArchivo)){
    console.log("existe..")
}else{
    console.log("no existe..!!")
}



// Agregamos información al archivo
fs.appendFileSync(rutaArchivo, "\n\n\nEditorial Planeta")

// Eliminamos el archivo

// setTimeout(() => {
//     fs.unlinkSync(rutaArchivo)
//     console.log("Archivo Eliminado...!!!")
// }, 3000);

fs.writeFile(rutaArchivo, texto1, (error)=> {
    if(error){
        console.log("Ocurrió un error, Detalle: ", error.message)
        return
    }

    console.log("Archivo generado..!!")
})

let rutaArchivo2 = "../textogaleano/productos.json"
let productos = [
    {
        id: 1,
        title: "Lampara Esfera con Pie Simil Madera",
        description: "Medidas Altura: 40cm, Diámetro: 13.50cm, Incluye USB",
        price: "59990",
        thumbnail: "https://acdn.mitiendanube.com/stores/898/220/products/207eccd0-7593-41f0-bc4d-87ad84f49b98-731c1fa5a16e81623c17060227937247-1024-1024.webp",
        code: "1234AZ56",
        stock: "15"
    },
    {
        id: 2,
        title: "Lampara de baja Black",
        description: "Medidas Bandeja Chica Altura: 14cm, Diámetro: 11cm, Incluye USB",
        price: "19990",
        thumbnail: "https://acdn.mitiendanube.com/stores/898/220/products/2b3d93da-39a3-4dff-8872-8f32872c15db-8529b29acca133fa3717048922471319-1024-1024.webp",
        code: "234AZ78",
        stock: "12"
    },
    {
        id: 3,
        title: "Lampara de hierro Black",
        description: "Medidas Altura: 36cm, Diámetro: 8.50cm, Incluye USB, 3 intensidades de luz",
        price: "32390",
        thumbnail: "https://acdn.mitiendanube.com/stores/898/220/products/42b8bc00-77ce-4cac-90eb-a90a3679afef-9c88b85d5ecce36e5917036060949373-1024-1024.webp",
        code: "1234AZ90",
        stock: "18"
    },
];

fs.writeFileSync(rutaArchivo2, JSON.stringify(productos, null, "\t"))


// Leemos el titulo del producto 1
let datoLeido=JSON.parse(fs.readFileSync(rutaArchivo2, {encoding:"utf-8"}))
console.log(datoLeido[0].title)


// Creamos promesas para el texto
const app=async()=>{
            await fs.promises.writeFile(rutaArchivo, texto1)
            let datosDelArchivo=await  fs.promises.readFile(rutaArchivo, {encoding:"utf-8"})
                    console.log(datosDelArchivo)
            await fs.promises.appendFile(rutaArchivo, "\n\nEditorial Alfaguara")
                    console.log("Editorial Agregada")

            // ELIMINAMOS EL ARCHIVO    
            // setTimeout(async()=> {
            //     await fs.promises.unlink(rutaArchivo)
            //     console.log("Archivo eliminado..!!")
            // }, 2000);
}


// Leemos el titulo , la descripcion y el precio de todos los productos en el array, los mostramos en consola
let productoTexto = JSON.stringify(productos, ["title", "description", "price"], 2)
console.log(productoTexto)

// let contador = 1000
// const modifica=(prop, valor)=>{
//     if(prop==="title"){
//         return valor.toUpperCase()
//     }

//     if(prop==="id"){
//         contador++
//         return {
//             idAnterior: valor,
//             idNuevo: contador,
//             title: "Prueba de producto Nuevo",
//             id: 900
//         } 
//     }

//     return valor
// }

// let productoTexto=JSON.stringify(productos, modifica, 2)
// console.log(productoTexto, typeof productoTexto)

// PROMESAS

const suma=(a,b)=>{
    return new Promise((res, rej) => {
        if(typeof a!=="number" || typeof b!=="number"){
            rej(new Error("Solo se aceptan argumentos númericos"))
        }

        res(a+b)
    })
}

const multiplica=(a,b)=>{
    return new Promise((res, rej) => {
        if(typeof a!=="number" || typeof b!=="number"){
            rej(new Error("Solo se aceptan argumentos númericos"))
        }

        res(a+b)
    })
}


// suma(8,7)
// .then(resultado=>{
//     console.log(resultado + 10)
// })
// .catch(error=>{
//     console.log(error.message)
// })

// suma("Juan", 7)
// .then(resultado =>{
//     console.log(resultado + 10)
// })
// .catch(error=>{
//     console.log(error.message)
// })
// .finally(() =>{
//     console.log("Esto se ejecuta siempre...")
// })

suma(5, 5)
    .then(res1=>{
        suma(res1, 5)
            .then(res2=>{
                suma(res2, 5)
                    .then(res3 => {
                        suma(res3, 5)
                            .then(res4 =>{
                                suma(res4, 5)
                                    .then(resFinal=>console.log(resFinal))
                            })
                    })
            })
    })


suma(3,3)
    .then((resultado)=>{
        return resultado + 5
    })
    .then(nuevoResultado=>console.log(nuevoResultado))
    .then(res=>console.log(res))


nuevoResultado=> console.log(nuevoResultado)


suma(5,5)
    .then(res1=>suma(res1, 5))
    .then(res2=> {
        console.prueba()
        return suma(res2, 5)
    })
    .then(res3 => suma(res3, 5))
    .then(res4 => suma(res4, 5))
    .then(resFinal=>console.log("Encadenamiento promesas", resFinal))
    .catch(error=>console.log(error.message))


let auxiliar=0
multiplica(3,4)
    .then(res1=>{
            auxiliar = res1
            return multiplica(5,3)
    })
    .then(res2 =>{
        return suma(auxiliar, res2)
    })
    .then(resFinal=>console.log("Resultado operacion:", resFinal))


// USO DE AWAIT & ASYNC

const entorno = async()=>{
    let res1=await multiplica(3,4)
    let res2=await multiplica(5,3)
    let resFinal=await suma(res1,res2)
    console.log(resFinal)
}

entorno()
