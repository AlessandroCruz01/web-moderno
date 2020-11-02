/* 
Array é uma estrutura unidirecional, ou seja é a mesma coisa da lista do python. é uma forma de agrupar elementos de uma forma linear. 
e essa estrutura é indexada. ou seja podemos acessar os elementos a partir do indicie zero.

em js o array é eterogenio (ate pq a liguagem é fracamente tipada)
*/

const valores = [7.7, 8.9, 9.2, 6.3] //modelo padrao de declaracao de arrays
console.log(valores[0], valores[3]) //vai mostrar os valores contidos no indicie 0 e 3
console.log(valores)

//E se tentarmos procurar um valor em um indicie que n existe dentro do array?
    //R- o js n fica jogando erros na cara, ele apenas vai dar uma msg de inexistente ou undefild
console.log(valores[5])

//E se tentarmos adicionar um valor a um indicie muito maior? por exemplo, o array tem 4 indicies 0 1 2 3, mas quero adicionar o valor ao indicie 10?
    //R- O js vai fazer o que vc quer e vai deixar uma msg dizendo que existem alguns indicies vazios dentro do arrray
valores[10] = 50
console.log(valores)

//posso acessar a quantidade de elementos em um array a partir do length
console.log(valores.length)

//para adicionar valores a um array tem o push
valores.push({id:3}, false, null, 'teste')
console.log(valores)

//para remover valores
console.log(valores.pop())

//remove a partir de indicies
console.log(delete valores[3])

console.log(valores)
console.log(typeof(valores))

