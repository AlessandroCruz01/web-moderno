//vamos comecar em estruturas de controle vendo o if

function soBoaNoticia(nota) {
    if (nota >= 7) { //O if em portugues significa SE, ou seja lemos o codigo ao lado da seguinte forma... Se (nota maior ou igual a 7 ) faca o bloco if se nao ....
        console.log(`Sua nota foi ${nota} e voce foi aprovado, parabens!`) //perceba que ele so dara o retorno caso o teste logico acima for verdade. entao ele entra no bloco if... 
    }
}

soBoaNoticia(8.4)
soBoaNoticia(6.4)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log(`O valor ${valor} é verdade!`)
    } else {
        console.log(`O valor ${valor} é falso!`)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
