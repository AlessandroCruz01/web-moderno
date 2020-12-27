console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//perceba que os 3 acima sao funcoes e sendo funcoes cada uma delas tem um .prototype

String.prototype.reverse = function (){//podemos adicionar novas funcoes 
    return this.split('').reverse().join()//split serve pra quebrar a string em um array, apos isso usamos o reverse (que existe dentro de array) ele vai inverter a lista, e apos isso usamos o join para juntar novamente o array!
}

console.log('Escola Cod3r'.reverse())//Perceba que o reverse nao tem para String, ou seja quando adicionamos ao prototype ele ficou disponivel!
//perceba que usamos uma string ou seja as funcoes que existem dentro de string estao liberadas para nos. mas o reverse nao existe dentro de string, e como string é uma funcao e dentro dela tem seu prototype. adicionamos ao prototype da funcao assim a msm fica liberado para todos os literais strings.

Array.prototype.first = function() {//nao existe um metodo para pegar apenas o primeiro elemento de um array, (ate porque para isso é bem simples apenas selecionamos o elemento da posicao [0] kkk mas por meio de aprendizado vamos adicionar uma funcao especifica pra isso!)
    return this[0]//uma coisa importante, acessamos os elementos de um array a partir do this dentro de uma funcao
} 

console.log([1,2,3,4].first())

//NUNCA MECHA EM FUNCOES QUE JA EXISTEM DENTRO DAS APIS! OU SEJA NUNCA SUSBSTITUA FUNCOES PADROES DA LINGUAGEM!!!!