const buscarPalavrasSemelhantes = (x, palavra) => {
    let ret = []
    for (let i = 0 ; i < palavra.length ; i++){
        if ( x in palavra[i] ){
            ret.push(palavra[i])
        }
    }
    return ret
}

console.log(buscarPalavrasSemelhantes("pro", ["programacao", "mobile", "profissional"]))