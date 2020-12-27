//Vamos entender sobre a funcao e o atributo prototype

function MeuObjeto(){}
console.log(MeuObjeto.prototype)//pense assim> o prototype é um atributo da funcao e ele é um objeto. (lembrando que Object tbm é uma funcao). ja para referenciar o prototipo acima, no caso o Object.prototype que é o mais alto nivel. precisamos usar o __proto__

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

//agora pense assim, sera que os dois objetos instanciados acima, o __proto__ (pai) deles apontam para o mesmo prototype?

console.log(obj1.__proto__ === obj2.__proto__)//perceba que sim, todos os objetos criados a partir da msm funcao contrutora aponta para o msm prototype

console.log(MeuObjeto.prototype === obj1.__proto__)// Perceba que quando usamos o new para instanciar um obejto a partir de uma funcao construtor. este objeto tem seu __proto__ apontado para o prototype da fucao. no caso a funcao é MeuObjeto e este tem seu prototype. Nao é a msm coisa de criar um objeto usando o new , pois nesse caso ele por padrao aponta para object.Protoyep


MeuObjeto.prototype.nome = 'Anonimo'
MeuObjeto.prototype.falar = function() {
    console.log(`${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafaeç'
obj2.falar()

const obj3 = {}
obj3.__proto__= MeuObjeto.prototype
obj3.nome = 'OBJ3'
obj3.falar()


//resumindo...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) //TODO OBJETO CRIADO A PARTIR DE UMA FUNCAO CONSTRUTORA TERA SEU __proto__ APONTADO PARA O PROTOTYPE DA FUNCAO E NAO PARA Object.prototype como visto nos objetos criados a partir do new ou em formato literal!

console.log(MeuObjeto.__proto__ === Function.prototype) //ACIMA DA FUNCAO TAMBEM TEMOS UM PROTOTIPO NO CASO O Function.prototype. ou seja resumindo CADA OBJ CRIADO A PARTIR DE UMA FUNCAO CONSTRUTORA É FILHO DE <nome da funcao>.prototype QUE POR SUA VEZ É FILHO DE Function.prototype

console.log(Function.prototype.__proto__ === Object.prototype) //SEGUINDO A CADEIA... (MDS) A Function.prototype tambem tem um pai que é o mais alto nivel Object.prototype. ou seja temos a seguinte cadeia - Object.prototype -> Function.prototype -> <nome da funcao>.prototype -> objetos criados a partir desta funcao apontarao para a msm!

console.log(Object.prototype.__proto__) //Como ja citado, o Object.prototype é o mais alto nivel!