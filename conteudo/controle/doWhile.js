function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    opcao = getInteiroAleatorio(-1,10)
    console.log(`Valores ${opcao}`)
} while (opcao != -1)

//do While n é muito usado!