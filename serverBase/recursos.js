import path from 'path'
import fs from 'fs'

let ruta = path.join(__dirname, 'data', 'usuarios.json')

function getUsers(){
    if(fs.existsSync(ruta)){
        return JSON.parse(fs.readFileSync(ruta, 'utf-8'))
    }else{
        return[]
    }
}

function saveUsers(users){
    fs.writeFileSync(ruta, JSON.stringify(users, null, 5))
}