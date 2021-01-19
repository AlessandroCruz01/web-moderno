const fs = require('fs') //este é o modulo para leitura de arquivos, ele ja vem por padrao no node, nao precisa ser instalado

const caminho = __dirname + '/arquivo.json' //arquvio que vamos ler

//ler o arquivo de forma sincrona...
    //lembre-se da aula de estrutura do node, neste caso é como se estivessemos colocando um trabalho diretamente no evet loop, ou seja caso o arquivo seja muito grande, ira travar...
const conteudo = fs.readFileSync(caminho, 'utf-8')// perceba que no vscode estamos criando tudo no encoding UTF-8 mas nse fosse outro seria necessario dizer...
console.log(conteudo)

//ler o arquivo de forma assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})