//CADEIA DE PROTOTIPOS (prototype chain)

Object.prototype.attr0 = 'Z' //Nao é recomendadao que vc fique colocando atributos no prototype

const avo = {
    attr1 : 'A'
}

const pai = {
    __proto__: avo,
    attr2: 'B'
}

const filho = {
    __proto__: pai,
    attr: 'C'
}

console.log(filho.attr1)
console.log(filho.attr0)
console.log(filho.attrA)

//vamos ver outro exemplo mais complexo

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    }, 
    
    status() {
        return `${this.velAtual }Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing -> sombreamento, no caso é quando vc tem uma variavel dentro de uma funcao com msm nome de uma variavel no escopo mais acima.. no caso quando chamados ela, a maquina vai buscar a variavel no escopo mais proxim! ou seja ela vai chegar na fucnao e ver que tem uma variavel com o nome la desejado. achando ela ja retorna e para ali msm pois nao precisa ir no escopo acima ja que a variavel pedida ja foi achada!
}

const Volvo = {
    modelo: 'V40',
    status() {
        return ` ${this.modelo}: ${super.status()} `//Assim como this referencia o escopo global ou contexto no caso. ou self do pyhton. o super serve para referenciar no nosso caso o prototipo acima!
    }
}

Object.setPrototypeOf(ferrari, carro)//Esta funcao serve para estabelecer uma relacao de prototipo. no caso ferrari tem carro como seu prototipo (pai) o equivalente a __proto__: carro
Object.setPrototypeOf(Volvo, carro)

ferrari.aceleraMais(300)
console.log(ferrari.status())

Volvo.aceleraMais(300)
console.log(Volvo.status())

console.log(ferrari)
console.log(Volvo)