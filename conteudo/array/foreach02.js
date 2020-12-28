Array.prototype.forEach2 = function(callback){ 
    for (let i = 0 ; i < this.length ; i++){//No caso para acessar a lista era so ter usado o this
        callback(this[i], i, this)
    }
}

const aprovados =  ['Aghata', 'Aldo', 'Leo', 'Manoel']
aprovados.forEach2(function(nome, indicie){
    console.log(`${indicie+1}) ${nome}`)
})

