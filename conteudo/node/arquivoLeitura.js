const fs = require('fs') //este é o modulo para leitura de arquivos, ele ja vem por padrao no node, nao precisa ser instalado

const caminho = __dirname + '/arquivo.json' //arquvio que vamos ler

//ler o arquivo de forma sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8')// perceba que no vscode estamos criando tudo no encoding UTF-8 mas nse fosse outro seria necessario dizer...
console.log(conteudo)//lembre-se da aula de estrutura do node, neste caso é como se estivessemos colocando um trabalho diretamente no evet loop, ou seja caso o arquivo seja muito grande, ira travar...

//ler o arquivo de forma assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Especificamente para o formato JSON, temos uma forma mais simples de leitura
const config = require('./arquivo.json')//neste caso é obrigatorio a extensao .JSON
console.log(config)

//Leitura de pasta
fs.readdir(__dirname, (err, arquivos) => {//https://nodejs.org/docs/latest/api/globals.html#globals_dirname
    console.log('Conteudo da pasta')
    console.log(arquivos)
})

//fs documentação - https://nodejs.org/api/fs.html
//fs exemplos - https://www.w3schools.com/nodejs/nodejs_filesystem.asp