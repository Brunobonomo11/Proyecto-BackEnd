const fs=require("fs")

// fs.readFileSync  Sincrona
// fs.readFile  Asincrona Callbacks
// fs.promises.readFile  Asincrona Promesas

[{nombre: "Bruno", id: 1}, {nombre: "Martin", id: 2}]

class UserManager{
    constructor(rutaAlArchivo){
        this.path=rutaAlArchivo
    }

    async getUsuarios(){
        if(fs.existsSync(this.path)){
            return fs.promises.readFile(this.path, {encoding:"utf-8"})
        }else{
            return[]
        }
    }
}

let usuarioManager=new UserManager("../usuarios.json")

usuarioManager.getUsuarios()