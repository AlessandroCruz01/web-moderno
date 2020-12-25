// Uma das tecnicas para ter encapsulamento em codigo, é colocarmos o atributo privado, e termos metodos para alterar esses atributos de forma mais controlada. Entao muita gente para ter um controle melhor coloca o atributo privado o que em js nao tem! para acessar esses atributos usam-se os metodos getters and setters.

const sequencia = {
    _valor: 1, //Convensao. por boas praticas é necessario usar o _ para que outros devs vejam esse atributo que ele é privado. js n existe privcao e ainda podemos alterar!
    get valor() { return this._valor++ },//o get pega o atributo, ou seja nao mechemos no atributo diretamente, isso facilita para validacoes
    set valor(valor) {//js n aceita sobrecarga de metodos (metodos com o mesmo nome mudando apenas algumas coias) mas nesse caso especifico ele aceita
        if (valor > this._valor) {
            this._valor = valor//perceba que podemos fazer validacoes
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //perceba que como estamos tentando voltar na contagem ja que acima colocamos o 1000 ele ignora!
console.log(sequencia.valor, sequencia.valor)