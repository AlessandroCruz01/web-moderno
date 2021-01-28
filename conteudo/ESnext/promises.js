function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)//o Resolve aceita apenas um unico parametro
        },segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?!?'))//O then é a resposta da funcao resolve. ou seja quando a promessa obter sucesso, ele ja manda o parametro para  o then
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))//Tratamento de erro se usa o catch

