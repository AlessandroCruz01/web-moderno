//Nesta aula vamos ver o map, dentro do map existe um laco que serve para transformar um array, ou seja ele vai mapear um array transformado-os. por exemplo temos um arrray e queremos criar outro array com mesmo tamanho tranaformando ele em um outro array com o dobro de cada elemento na lista!

const nums = [1,2,3,4,5]

// O map é um for com propósito!
let resultado = nums.map(function(e){
    return e * 2
})//passsamos como parametro uma callback

console.log(resultado)

//O MAP NAO TRANSFORMA O array ATUAL, ELE GERA OUTRO Array

const soma10 = e => e + 10 //Lembre que funcoes arrow tem seu return implicito!
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
