const http = require("http")
const url = require("url")

const PORT = 3000

const server=http.createServer((req, res)=>{

    // let urlParsed=url.parse(req.url)
    // console.log(urlParsed)

    if(req.url==="/contacto"){
        
        res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})
        res.end("Pagina de Contacto")
        return
    }

    if(req.url==="/"){
        
        res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})
        res.end("Server activo con http en puerto 3000")
        return
    }
    
    res.writeHead(404, {"Content-Type":"text/html; charset=utf-8"})
    res.end("La pagina no fue encontrada Error-404 - Not Found")
})

server.listen(PORT, ()=>{
    console.log("Server activo en puerto", PORT)
})