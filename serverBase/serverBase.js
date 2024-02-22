const http = require("http")
const url=require("url")

const PORT = 3000

const server = http.createServer((req, res) => {

    let urlParsed=url.parse(req.url)
    console.log(urlParsed)

    if(req.url==="/contacto"){
        res.writeHead(200, {"content-type":"text/html; charset=utf-8"})
        res.end("Contact Page")
        return
    }

    if(req.url==="/"){
        res.writeHead(200, {"content-type":"text/html; charset=utf-8"})
        res.end("Server Básico con http...!!!")
        return
    }

    res.writeHead(404, {"Content-Type":"text/html; charset=utf-8"})
    res.end("Error 404: Not Found!")
})

server.listen(PORT, ()=>{
    console.log("Server online en puerto", PORT)
})