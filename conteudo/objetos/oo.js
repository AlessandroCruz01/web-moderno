// CODIGO NAO EXECUTAVEL       

    /* Antes da programacao procedural nos tinhamos a programacao go to, que pulava pra outro trexo de codigo... (CODIGO NAO ESTRUTURADO) */   
    /* Apos o go to tivemos a criacao da programacao estruturada chamada procedural */

    // Procedural
    processamento(valor1, valor2)

    // OO
    objeto = {
        valor1,
        valor2,
        processamento() {
            // ...
        }
    }

    objeto.processamento()


//PRINCIPIOS IMPORTANTES DA OO

// 1 - ABSTRAÇÃO - É vc pegar um objeto do mundo real e entender como traduzir este objeto para o sistema. Por exempo, vamos imaginar um objeto simples como um carro:
carro = {
    // O carro tem os atributos:
    cor,
    chassis,
    motor,
    ligar(){},
    desligar(){},

    // Agora vamos pensar que este sistema é feito pro Dentran, sera que esse sistema precisa saber como ligar o carro... é isso que significa a abstracao, é saber o que é importante pro nosso sistema saber sobre aquele objeto.
}

// 2 - ENCAPSULAMENTO - Detalhes de implementacao escondido e mostrar apenas a quem apenas para determinado objeto. Continuando com o exemplo do carro, nos sabemos que o carro precisa trocar a marcha, precisa de direcao , gasolina, essas coisas, mas as informacoes mais a fundo como, o pq um carro tem mais cavalos que outros, o pq a gasolina é queimada, ou seja detalhes internos sao encapsulados. 

// 3 - HERANÇA - 