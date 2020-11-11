/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false. */

const bissexto = (ano) => {
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        return true
    } else {
        return false
    }
}

console.log(bissexto(2000))
console.log(bissexto(2001))
console.log(bissexto(2002))
console.log(bissexto(2003))
console.log(bissexto(2004))
console.log(bissexto(2010))
console.log(bissexto(2011))
console.log(bissexto(2012))

