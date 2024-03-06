const http = require("http")

const PORT = 8080

const server=http.createServer((req, res)=>{
    
    res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"})
    res.end("Server Basico con Http !!")
})

server.listen(PORT, ()=>{
    console.log("Server activo en puerto", PORT)
})