class TicketManager{
    static #precioBaseganancia=0.15
    // static ganancia2=0.15


    constructor(){
        this.eventos=[]
    }

    getEventos(){
        return this.eventos
    }

    addEventos(nombre, lugar, fecha=new  Date(), capacidad=50, costo=0){
        // Validaciones, formateo de datos, etc...
        if(!nombre || !lugar){
            console.log("Complete nombre y lugar")
            return
        }

        let existe=this.eventos.find(evento=>evento.nombre===nombre && evento.lugar===lugar)
        if(existe){
            console.log(`El evento ${nombre} ya existe..!!!`)
            return
        }

        let id=1
        if(this.eventos.length>0){
            // [1,2,3,4,5]
            // this.eventos[n-1]
            id=this.eventos[this.eventos.length-1].id+1
        }

        let nuevoevento={
            id, nombre, lugar, fecha, capacidad,
            costo:costo+costo*TicketManager.#precioBaseganancia,
            asistentes:[]
        }
        this.eventos.push(nuevoevento)

        }

        addUsuario(id, nombre, email){
            let indiceEvento=this.eventos.findIndex(evento=>evento.id===id)
            if(indiceEvento===-1){
                console.log(`No existen eventos con id ${id}`);
                return
            }

            let existe= this.eventos[indiceEvento].asistentes.find(asistente=>asistente.email===email)
            if(existe) {
                console.log(`El usuario con email ${email} ya esta registrado en el evento ${id}`)
                return
            }
        }
}

const tm01=new TicketManager()

console.log(tm01.getEventos())
tm01.addEventos("afterclass", "en remoto", new Date(2024, 1, 14), 100, 100)
tm01.addEventos("afterclassII", "en remoto", new Date(2024, 1, 14), 100, 100)
tm01.addEventos("afterclassIII", "en remoto", new Date(2024, 1, 14), 100, 100)
tm01.addEventos("afterclass", "en remoto", new Date(2024, 1, 14), 100, 100)

tm01.addUsuario(90, "Bruno", "bruno@test.com")
tm01.addUsuario(90, "Bruno", "bruno@test.com")
tm01.addUsuario(90, "Bruno", "bruno@test.com")
tm01.addUsuario(90, "Martin", "martin@test.com")

console.log(tm01.getEventos())