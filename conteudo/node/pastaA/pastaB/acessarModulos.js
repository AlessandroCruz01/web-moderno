const moduloA = require('../../moduloA')//caminho relativo
console.log(moduloA.ola)

const c = require('./pastaC')
console.log(c.ola2)

//Pensemos agora nos modulos instalados dentro de node_modules

//Perceba que quando colocamos o nome do modulo, ele procura dentro da pasta o arquivo index.js, neste caso pense que todo modulo tem seu index por obrigatorio!

//Modulos core, sao os modulos que ja vem por padrao no node!

// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Executando...')
//     res.end()
// }), listen(8080)