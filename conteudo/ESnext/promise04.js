function gerarNumerosEntre(min, max, tempo){
    if (min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([//para trazer todas as promessas resolvidas com apenas um unico then
        gerarNumerosEntre(1,60, 1000),
        gerarNumerosEntre(1,60, 4000),
        gerarNumerosEntre(1,60, 2000),
        gerarNumerosEntre(1,60, 5000),
        gerarNumerosEntre(1,60, 1000),
        gerarNumerosEntre(1,60, 8000),
    ])
}

console.time('Promise')
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeLog('Promise')
        console.timeEnd('promise')
    })
