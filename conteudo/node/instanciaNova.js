//para retornar uma nova instancia podemos usar uma factory que retonna um novo objeto

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}

//para testarmos vamos ao arquivo instanciaCliente.js...