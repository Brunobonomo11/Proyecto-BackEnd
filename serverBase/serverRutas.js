const http = require("http")

const PORT = 3000

const server = http.createServer((req, res) => {

    // let urlParsed=url.parse(req.url)
    // console.log(urlParsed)

    // console.log(req.url)
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
})

server.listen(PORT, ()=>{
    console.log("Server online en puerto", PORT)
})