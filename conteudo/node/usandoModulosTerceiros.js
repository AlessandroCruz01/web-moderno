//Aqui vamos usar o lodash que instalamos via terminal!

const _ = require('lodash') //Referencia para a biblioteca a partir do _;
                            //Perceba que nao estamos passando caminho relativo, no caso ele vai em node_modules e procura pelo arquivo index.js

setInterval(() => console.log(_.random(1, 1000)), 2000)//o setInterval serve para ficar disparando a funcao de tempos em tempos

//voltemos ao terminal para instalar uma nova biblioteca
//  npm i -g nodemon

//+ nodemon@2.0.7 -perceba que o npm instalou a versao 2.0.7 do nodemon
//added 119 packages from 53 contributors in 31.649s - e adicionou 119 novos pacotes em 31 segundos

//Ainda no terminal, vamos entender como funciona o nodemon...

//nodemon <nome do arquivo que quer executar> 

//perceba que se alterarmos o codigo, o nodemon sozinho da o refresh e continua executando a aplicacao. é muito bom para vermos a versao mais nova do codigo em tempo real! muuito bom!