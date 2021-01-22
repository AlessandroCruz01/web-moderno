function real (partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valores = isNaN(valor) ? valor : `R$ ${valores}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)