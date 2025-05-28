import http from 'http';

http.createServer(function(req, res){
    res.end("Hello, World! Welcome to my website");
}).listen(6106);

console.log("Servidor rodando!")