import fs from "fs"

export class CelularesManager{
    constructor(ruta){
        this.path=ruta
    }

    getCelulares(){
        if(fs.existsSync(this.path)){
            return JSON.parse(fs.readFileSync(this.path, {encoding:'utf8'}))
    }else {
        return []
    }
}
}