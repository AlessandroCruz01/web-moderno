const bissexto = (ano) => {
    if (ano%4 === 0 && ano%100 != 0 || ano % 400 === 0){
        return true
    } else {
        return false
    }
}
console.log(bissexto(2020)) //Bissexto
console.log(bissexto(1004)) //Bissexto
console.log(bissexto(1597)) //Nao
console.log(bissexto(2019)) //Nao
console.log(bissexto(2004)) //Bissexto
console.log(bissexto(2024)) //Bissexto
console.log(bissexto(1900)) //Nao
console.log(bissexto(2000)) //Bissexto

