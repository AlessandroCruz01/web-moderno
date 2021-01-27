// nao aceita repeticao / nao indexada

const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Corinthians').add('Palmeiras')
times.add('Flamengo')
times.add('Vasco')// Perceba que nao vai haver repeticao!

console.log(times)
 
console.log(times.size)//ver o tamanho do conjunto
console.log(times.has('Vasco'))//ver se este elemento esta dentro do conjunto]
console.log(times.has('vasco'))//Perceba que esta funcao é keyse sensitive ou seja letra maiuscula e minuscula sao diferentes
times.delete('Flamengo')//deletar

console.log(times)

const outrosTimes = ['Botafogo', 'Flamengo', 'Coritiba']
const outroSet = new Set(outrosTimes)

console.log(outroSet)
