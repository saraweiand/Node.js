import express from "express";
const app = express();


app.get("/", function(req, res){
    res.send("Seja bem-vindo(a) ao meu app!")
})

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre")
})

app.get("/blog", function(req, res){
    res.send("Bem-vindo(a) ao meu blog!")
})


app.listen(6106, function(){
    console.log("Servidor rodando na url http://localhost:6106")
})