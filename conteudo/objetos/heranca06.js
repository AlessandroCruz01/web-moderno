function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Ate breve', 456)//lembre-se - quando usamos o new a partir de uma funcao construtora, o seu __proto__ aponta para o <nome da funcao>.prototype
console.log(aula1, aula2)

//simulando new
function novo(f, ...params) {
    const obj = {}//criamos um objeto novo cm a notacao literal de objetos ou seja o obj = {}.

    obj.__proto__ = f.prototype// associamos o __proto__ do objeto ao prototype da funcao. lembre-se quando criamos um objeto de forma literal ou usando o new Object o __proto__ dele aponta para Object.prototype, o que nao ocorre quando usamos o new a partir de uma funcao consttrutora!

    f.apply(obj, params)//agora vamos executar a funcao, passando como parametros o apply recebe dois parametros - o primeiro é o this ou saja o contexto da funcao, no caso o this da funcao é o obj pois é ele que estamos trabalhando. e o segundo é um array de parametros. como la encima usamos o operador (...) spread - Ele basicamente permite que expressões expandam o conteúdo de arrays em locais onde múltiplos elementos são esperados. ou seja ele espera multiplios parametros e os concatena

    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Ate logo', 456)
console.log(aula3, aula4)