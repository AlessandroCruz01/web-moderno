//Agora vamos focar no comportamento to this.

function Pessoa() { //perceba que usamos o function pq neste contexto o this aponta para pessoa
    this.idade = 0

    setInterval(() => { //uma arrow function onde o this sabe que no contexto ele aponta para Pessoa
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa //Tudo certo