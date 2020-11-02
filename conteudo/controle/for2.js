//Esta é uma forma na qual vc n precisa exatamente de uma vatiavel de controle... 
const notas = [1.2,6,52,5,535,535,536,58383,6556]

for (let i in notas){
    console.log(i, notas[i])//ele percore pelos indicies e nao pelos valores
}

//existem outras formas mais interessantes de percorrer um array
//melhores que for...

const pessoa = {
    nome : 'Ana',
    idade : 29
}
 
for (let i in pessoa) {
    console.log(pessoa[i])
}