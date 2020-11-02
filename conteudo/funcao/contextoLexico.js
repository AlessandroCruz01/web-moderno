//contexto lexico é o contexto em que as coisas sao declaradas...
const valor = 'Global'

//perceba que a variavel valor foi declara no ambiente global do arquivo contextoLexico.js...
function minhaFuncao() {
    console.log(valor)//perceba que na funcao nao existe uma variavel valor, ou seja esse cara vai buscar fora do seu escopo, no escopo maior pra ver se acha alguma variavel com esse nome. achando ele seta o valor e jogo que segue
}

function exec() {
    const valor = 'Local'//perceba que declaramos uma funcao local com o msm nome da variavel que criamos na parte global
    minhaFuncao()
}

exec()
//Observe que ele nao trouxe o nome local, isso porque uma funcao quando ela é declarada, ela nao guarda apenas os blocos de codigo e atributos. ela tambem guarda a FORMA em que ela foi escrita. Ou seja, seu contexto. onde se ela foi declarada e na declaracao seu contexto era em que a variavel valor era global. entao esse efeito persiste!