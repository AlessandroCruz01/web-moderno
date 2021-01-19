console.log(this === global)// this aponta para Module.exports e nao para o global
console.log(this === module)// false, pois o this é um objeto
console.log(this === module.exports)// true
console.log(this === exports)//verdadeiro pq o this e o exports apontam para o msm endereco de memoria

//atencao quando for acessar o this de dentro de um modulo

function logThis(){
    console.log('De dentro de uma funcao...')
    console.log(this === exports)//perceba que no escopo da funcao o this n aponta para o module.exports
    console.log(this === global)//this dentro de uma funcao aponta para global

    this.perigo = '....'//tome cuidadao pois usar o this neste momento estamos acessando o global!
}
logThis()