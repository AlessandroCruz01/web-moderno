const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)//Perceba que acessar desta forma nao da! Ele retorna undefined
console.log(tecnologias.get('react').framework)//para acessar corretamente precisamos usar o get...

const chavesVariadas = new Map([//Perceba que a chave pode variar! 
    [function (){ }, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas)//perceba que a chave n aceita repeticao!