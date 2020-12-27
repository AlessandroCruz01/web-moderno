const pai = {nome: 'pedro', cabelo: 'preto'}

const filha = Object.create(pai)//podemos mandar o prototipo por parametro do Object.create
filha.nome = 'Ana'

console.log(filha.cabelo)

const filha2 = Object.create(pai, {
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
})

console.log(filha2)
filha2.nome = 'Carla'
console.log(` ${filha2.nome} tem cabelo ${filha2.cabelo} `)
console.log(Object.keys(filha))
console.log(Object.keys(filha2))

for (let key in filha2){
    filha2.hasOwnProperty(key) ? //Esta funcao serve para saber se aquele atributo é do objeto local ou por heranca
        console.log(key) : console.log(`Por erança ${key}`)
}