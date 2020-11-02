function Carro( velocidadeMaxima = 200 , delta = 5 ) {//delta vai servir pora saber de quanto em quanto deve-se acelerar;
    //Atributo Privado
    let velocidadeAtual = 0//Esse é um atributo que pertence apenas ao escopo de carros. nao pode ser acessado de fora

    //metodo publico
    this.acelerar = function () {//serve para acrescentar a velocidadeAtual, que esta sendo visto apenas dentro da funcao
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta//ele pode continuar acelerando
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    
    //metodo publico
    this.getVelocidadeAtual = function() {//PEGA A VELOCIDADE ATUAL PARA SER MOSTRADA NA TELA FORA DA FUUNCAO
        return velocidadeAtual
    }
}

//----------------------------------------------------------------------------------//

//so çembrando que colocamos a velocidade atual privada, pois se ela ficasse aberta o usuario poderia chamar Carro.velocidade atual e colocar um valor ACIMA ate msm da velocidade maxima...

const uno = new Carro//pode-se usar ou nao os ()
uno.acelerar()//acelera cm valores padrao, de 5 em 5 que é valor padrao de delta
console.log(uno.getVelocidadeAtual())


const ferrari = new Carro(350, 20)//obrigatorio o uso quando passamos atributos
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())


//perceba que a partir do modelo acima nos criamos outros objetos. isso é mto relacionado a OO