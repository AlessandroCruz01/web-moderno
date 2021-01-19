const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()//retorna uma funcao factory, para ter acesso ao objeto precisamos chamar a funcao factory no caso usando ()
const contadorD = require('./instanciaNova')()

//vamos aos testes, vamos incrementar primeiramente o contadorA, lembre-se que foi requerido a partir do modulo de instancia unica
contadorA.inc()
contadorA.inc()//perceba que chamamos a funcao de incrementacao duas vezes ou seja o valor foi somado +1 duas vezes poreeem....
console.log(contadorB.valor)//Vamos ver o valor de contador B, perceba que sim ele vai mudar pq como foi dito, ele n é independente!

//vamos ver agora a reacao do contadorC

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)//perceba que isso nao ocorre, cada instancia é unica!