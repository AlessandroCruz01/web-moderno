//A heranca é um principio da OO onde vc herda de uma classe pai todos os seus atributos e metodos
//OBS: ENTRE HERANCA E COMPOSICAO OPTE PELA COMPOSICAO POIS EM JS SO PODEMOS TER UMA CLASSE PAI!
//A heranca de js é baseda em prototipos! 
// [[Prototype]] é um conceito != prototype que é uma propriedade!

//HERANCA EM JS É DIFERENTE DE HERANCA EM LINGUAGENS COMO JAVA, EM JS TRABALHAMSO COM REFERENCIA DE PROTOTIPO __proto__ 

const ferrari = {
    modelo: 'F40',
    velMax: 23
}

const Volvo = {
    modelo: 'V40',
    velMax: 23
}

console.log(ferrari.__proto__)//este atributo, __proto__, a partir dele podemos acessar o objeto prototipo(pai)
//perceba que o prototipo de ferrari é um objeto vazio

console.log(ferrari.__proto__ === Object.prototype)
console.log(Volvo.__proto__ === Object.prototype)

//Entendendo -> O Object.prototype nada mais é que o nivel mais alto na hierarquia de objetos, onde acima dele nao ha mais nada ou seja Null. sendo assim todo obejto tem um  prototipo (pai) e este pai é o prototype. ou seja tanto os objetos do nosso exemplo sao extritamente iguai pois ambos apontam para prototype.
console.log(ferrari.__proto__ === Volvo.__proto__) //perceba que a resposta sera true

console.log(Object.prototype.__proto__)//como citado, nao ha nada acima de prototype!

console.log(typeof(Object.prototype))
console.log(typeof(Object))
