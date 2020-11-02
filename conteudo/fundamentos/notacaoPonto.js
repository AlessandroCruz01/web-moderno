console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'//podemos usar a notacao ponto para criar atributos dinamicamente

function Obj(nome) {
    this.nome = nome// aqui é como se dissesimos que recebemos o parametro nome e esse paremetro sera publico.
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)