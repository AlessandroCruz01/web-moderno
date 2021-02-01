function funcionarOuNao(valor, chanceErr){
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if (Math.random() < chanceErr){
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }

    })
}

funcionarOuNao('Testando...', 0.5)
    .then(console.log)
    .then(
        v => console.log(v),
        err => console.log(`Erro geral: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`))