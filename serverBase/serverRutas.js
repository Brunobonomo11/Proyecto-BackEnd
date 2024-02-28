const http = require("http")
const url=require("url")

const PORT = 3000

const server = http.createServer((req, res) => {

    // let urlParsed=url.parse(req.url)
    // console.log(urlParsed)

    let urlParsed = url.parse(req.url, true)
    console.log(urlParsed)

    // console.log(req.url)
    if(urlParsed.pathname==="/contacto"){
        if(urlParsed.query.name){
            res.writeHead(200, {"content-type":"text/html; charset=utf-8"})
            res.end("Contact Page" + urlParsed.query.nombre)
        }else {
            res.writeHead(200, {"content-type":"text/html; charset=utf-8"})
            res.end("Contact Page")
        }
        return
    }

    if(urlParsed.pathname==="/"){
        res.writeHead(200, {"content-type":"text/html; charset=utf-8"})
        res.end("Server Básico con http...!!!")
        
    }

    res.writeHead(404, {"Content-Type":"text/html; charset=utf-8"})
    res.end("Error 404: Not Found!")
})

server.listen(PORT, ()=>{
    console.log("Server online en puerto", PORT)
})