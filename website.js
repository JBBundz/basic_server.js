const http = require('http')
const server = http.createServer((req,res) => {       //req = request,res=response 
    if(req.url === '/'){
        res.write('This has changed')
    }
    if(req.url === '/about'){
        res.write('This is the about page x2')
        res.end
    }
})
server.listen(5000)
