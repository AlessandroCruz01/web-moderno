// operador ... rest (juntar) / spread (espalhar)

//usar spread com objetos...
const funcionario = { nome: 'Maria', salario: 256532.25 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

//usar spread com array...
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['maria', ...grupoA, 'rafaela']
console.log(grupoFinal)