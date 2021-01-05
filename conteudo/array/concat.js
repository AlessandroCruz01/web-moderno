const filhas = ['maria', 'fernanda']
const filhos = ['manoel']
const todos = filhas.concat(filhos)//podemos adicionar diretamente outros elementos alem do array para ser concatenado
console.log(todos)

console.log([].concat([1,2, [3]], [4,5,[6,[7]]]))//perceba que ele concatena mas tira apenas o primeiro nivel