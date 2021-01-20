const porta = 3003

const bancoDeDados = require('./banco')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use( bodyParser.urlencoded({ extended: true }) )//Isso quer dizer que toda requisicao, que tiver um padrao urlencoded ele vai aplicar esse middleware, que vai fazer o parser no corpo da requisicao. ou seja vai tornar o corpo da requisicao web em objetos

app.get('/produtos', (req, res, next) => {
    res.send( bancoDeDados.getTodosProdutos() ) //O metodo send ja converte automaticamente para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send( bancoDeDados.getProduto(req.params.id))//no caso como vamos ver um id, ele vem na requisicao!
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)//JSON

})

app.put('/produtos/:id', (req, res, next) => {//para alteração
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto)//JSON

})

app.delete('/produtos/:id', (req, res, next) => {//para exclusao
    const produto = bancoDeDados.excluirProduto( req.params.id )
    res.send(produto)//JSON
})


app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})

//para nossos testes vamos instalar o body-parser, essa biblioteca serve para conseguir ler o body de uma requisicao!

//vamos para o postman