const contarPalavras = (palavra) => {
    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
    return palavra.split(" ").length
}

console.log(contarPalavras("Sou uma Frase"))
console.log(contarPalavras("Me divirto aprendendo a programar"))