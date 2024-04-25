// MONGO DB ATLAS

// brunobonomo  /  jfvsZawoy6AT9olI
// bruno.bonomo@hotmail.com

// POWERSHELL
// mongosh "mongodb+srv://cluster0.1xtnzaz.mongodb.net/" --apiVersion 1 --username brunobonomo

// NODE JS
// mongodb+srv://brunobonomo:jfvsZawoy6AT9olI@cluster0.1xtnzaz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0




db.products.insertOne({
    marca: "Iphone",
    modelo: "Xs Max",
    almacenamiento: "64Gb",
    pantalla: "6.5"
})
db.products.insertOne({
    marca: "Motorola",
    modelo: "Edge 30 Neo",
    almacenamiento: "128Gb",
    pantalla: "6.4"
})
db.products.insertOne({
    marca: "Samsung",
    modelo: "S23 Ultra",
    almacenamiento: "512Gb",
    pantalla: "6.8"
})
db.products.insertOne({
    marca: "Iphone",
    modelo: "13 Pro Max",
    almacenamiento: "1Tb",
    pantalla: "6.7"
})
db.products.insertOne({
    marca: "Motorola",
    modelo: "Edge 40",
    almacenamiento: "256Gb",
    pantalla: "6.2"
})



let consolas = [{
    marca: "Playstation",
    modelo: "5",
    precio: "725 usd"
},
{
    marca: "Playstation",
    modelo: "4",
    precio: "520 usd"
},
{
    marca: "Xbox Series",
    modelo: "S",
    precio: "580 usd"
},
{
    marca: "Xbox Series",
    modelo: "X",
    precio: "760 usd"
},
{
    marca: "Pc Gamer Asus",
    modelo: "XT3065",
    precio: "380 usd"
}
]



db.consolas.insertMany([
{
    marca: "Playstation",
    modelo: "5",
    precio: "725 usd"
},
{
    marca: "Playstation",
    modelo: "4",
    precio: "520 usd"
},
{
    marca: "Xbox Series",
    modelo: "S",
    precio: "580 usd"
},
{
    marca: "Xbox Series",
    modelo: "X",
    precio: "760 usd"
},
{
    marca: "Pc Gamer Asus",
    modelo: "XT3065",
    precio: "380 usd"
}
])

// db.consolas.findOne()

// Contamos la cantidad de documentos que hay en nuestra base de datos
// db.consolas.estimatedDocumentCount()
// db.consolas.countDocuments()
// db.consolas.find().count()

// Buscamos documentos que tengan la marca Playstation
// db.consolas.find({marca: "Playstation"})


let estudiantes=[
    {
        nombre: 'Bruno',
        apellido: 'Lopez',
        curso: 'Programación Backend',
        edad: '23',
        correo: 'brunolo@gmail.com',
        sexo: 'M'
    },
    {
        nombre: 'Martin',
        apellido: 'Gonzalez',
        curso: 'Programación Backend',
        edad: '28',
        correo: 'gonmartin23@gmail.com',
        sexo: 'M'
    },
    {
        nombre: 'Laura',
        apellido: 'Mercedes',
        curso: 'Programación Backend',
        edad: '27',
        correo: 'mer_laura@gmail.com',
        sexo: 'F'
    },
    {
        nombre: 'Marina',
        apellido: 'Gutierrez',
        curso: 'Programación Backend',
        edad: '33',
        correo: 'gutimari_23@gmail.com',
        sexo: 'F'
    },
    {
        nombre: 'Matias',
        apellido: 'San Juan',
        curso: 'Programación Backend',
        edad: '35',
        correo: 'matiassanj@gmail.com',
        sexo: 'M'
    },
    {
        nombre: 'Camila',
        apellido: 'Martin',
        curso: 'Programación Backend',
        edad: '39',
        correo: 'cami-mar56@gmail.com',
        sexo: 'F'
    }
]


db.estudiantes.insertMany([
    {
        nombre: 'Bruno',
        apellido: 'Lopez',
        curso: 'Programación Backend',
        edad: '23',
        correo: 'brunolo@gmail.com',
        sexo: 'M'
    },
    {
        nombre: 'Martin',
        apellido: 'Gonzalez',
        curso: 'Programación Backend',
        edad: '28',
        correo: 'gonmartin23@gmail.com',
        sexo: 'M'
    },
    {
        nombre: 'Laura',
        apellido: 'Mercedes',
        curso: 'Programación Backend',
        edad: '27',
        correo: 'mer_laura@gmail.com',
        sexo: 'F'
    },
    {
        nombre: 'Marina',
        apellido: 'Gutierrez',
        curso: 'Programación Backend',
        edad: '33',
        correo: 'gutimari_23@gmail.com',
        sexo: 'F'
    },
    {
        nombre: 'Matias',
        apellido: 'San Juan',
        curso: 'Programación Backend',
        edad: '35',
        correo: 'matiassanj@gmail.com',
        sexo: 'M'
    },
    {
        nombre: 'Camila',
        apellido: 'Martin',
        curso: 'Programación Backend',
        edad: '39',
        correo: 'cami-mar56@gmail.com',
        sexo: 'F'
    }
])

// db.estudiantes.insertMany(estudiantes)

// TOTAL DE LOS ESTUDIANTES
db.estudiantes.find()

// ESTUDIANTES SEXO MASCULINO
db.estudiantes.find({sexo:'M'})

// CONTAMOS LA CANTIDAD DE ESTUDIANTES TOTAL
db.estudiantes.find({}).count()

// CANTIDAD DE ESTUDIANTES SEXO FEMENINO
db.estudiantes.find({sexo:'F'}).count()

// FILTROS POR EDAD
db.estudiantes.find({edad:{$gt:25}})
db.estudiantes.find({edad:{$gt:30}})

// FILTRAMOS TODOS LOS ESTUDIANTES QUE TENGAN APELLIDO MARTIN
db.estudiantes.find({apellido:{$all:["Martin"]}})

// BUSCAMOS SOLO EL NOMBRE DEL ESTUDIANTE
db.estudiantes.distinct("nombre")

// BUSCAMOS SOLO NOMBRE Y EDAD DE CADA ESTUDIANTE
db.estudiantes.find({}, {nombre:1, edad:1, _id:0}).sort({edad:-1})