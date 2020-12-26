//Primeiro vamos criar um objeto literal
const pessoa = {
    idade: 'rebeca',
    idade: 2,
    peso: 13
}

//Agora vamos ver algumas funcoes importantes...
console.log(Object.keys(pessoa)) //Ele vai pegar todas as chaves (lembre-se objeto é uma colecao dinamica de chaves-valor)

console.log(Object.values(pessoa)) //Aqui pegamos todos os valores deste objeto

console.log(Object.entries(pessoa)) //traz um array compposto por arrays internos de chave valor podemos usar esta funcao em outras ocasioes como por exemplo:

    Object.entries(pessoa).forEach(e => {//a partir do forEach eu vou percorrer os elementos do array criado a partir do entries
        console.log(`${e[0]}: ${e[1]}`)
    });

    //podemos usar tambem um destructuring (Destructuring (desestruturação) é uma expressão no Javascript que possibilita ao usuário “desempacotar” valores de um array ou propriedades de objetos, em variáveis diferentes!)
    Object.entries(pessoa).forEach(([chave, valor]) => {// estamos usando o destructuring a partir do ()
        console.log(`${chave}: ${valor}`)
    });

    Object.defineProperty(pessoa, 'dataNascimento', {
        enumarable: true, 
        writable: false,
        value: '01/01/2020'
    })//para definirmos uma propriedade de um objeto de forma mais completa

    pessoa.dataNascimento = '01/01/2019'
    console.log(pessoa.dataNascimento)
    console.log(Object.keys(pessoa))
    console.log(pessoa)

    //Object.assign (ECMAScript 2015)
    const dest = { a: 1 }
    const o1 = { b: 2 }
    const o2 = { c: 3, a: 4 }
    const obj = Object.assign(dest, o1, o2)//esta funcao concartena objetos, no exemplo o objeto dest é o destino onde os atributos de o1 e o2 serao concatenados. ou seja no caso ele vai ver se n ha repetidos e ira manter...

    //para finalizar vamos ver novamente o:
    Object.freeze(obj)//o freeze congela o obj onde nao podemos fazer nehum tipo de alteracao
    obj.c = 1
    console.log(obj)