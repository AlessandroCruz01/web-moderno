{ { { { { { { { { { { var sera = 'Será' } } } } } } } } } } }


console.log(sera) //Escopo é o local ate onde a variavel é visivel. Por exemplo em python, uma variavel que estiver dentro de uma funcao so sera vista dentro da propria funcao! ja cm o var isso n ocorre, vc pode ver ela como escopo global msm sendo declarada dentro de um escopo de funcao ou msm como visto acima dentro de varios blocos

function teste() {
    var local = 123//neste caso vemos o caso explicado acima. a variavel local so pode ser acessado dentro do escopo de function
}
teste()
console.log(local)

//relacionado a var so existem dois escopos possiveis
// -> global
// -> fUNCAO