//Exemplo com callback
setTimeout(function(){
    console.log('Executando Callback')

    setTimeout(function(){
        console.log('Executando Callback de dentro da primeira callback')

        setTimeout(function(){
            console.log('Outra callback dentro da segunda callback kkkkk')
        }, 2000)

    }, 2000)

}, 2000)
//Acima temos o exemplo do chamado CallBack Hell, ou seja o inferno das callbacks onde vc ver um aninhamneto de callbacks...


//Mesmo exemplo com promise
function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(() => esperarPor())
    .then(() => esperarPor())