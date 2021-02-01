let lerArquivo = new Promise(function(resolve){
    const fs = require('fs')
    const caminho = './dados.txt'

    fs.readFile(caminho, 'utf-8', (err, data) => {
        if (err) {
            return console.log(err)
        } else {
            console.log(data.toString())
        }
    })
    resolve()
})


lerArquivo
    .then(console.log)


//CORREÇÃO

const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lendoArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, data){
            resolve(data.toString())
        })
    })
}

lendoArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => conteudo)
    .then(console.log)