module.exports = function(...nomes){//os tres pontinho, significa que esperamso receber parametros variados ou ate msm no nosso caso uma lista de nomes
    return nomes.map(nomes => `Boa semana ${nomes}`)//este metodo vai tornar uma lista de nomes em uma lista de saudacoes com o nome da pessoa
}

//vamos para o arquivo passandoParametrosCliente.js
