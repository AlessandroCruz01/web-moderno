function Pessoa() {
    this.idade = 0

    const self = this //uma outra tecnica para amarrar o this é colocar ele dentr de uma outra variavel para que faca o efeito do bind

    setInterval(function() { // O setInterval dispara uma funcao a partir de um determinado tempo contadao em milissegundos
        self.idade++
        console.log(self.idade)//como fizemos uma funcao tradicional.o this referenciara outra coisa e nao o que queremos que é o idade
    }/*.bind(this)*/, 1000)//1000 milissegundos o que daria um segundo
}

new Pessoa
