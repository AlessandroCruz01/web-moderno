// Na versao do ECMA Script 2015, surgiu um conceito de classe. mas na vdd ela é um detalhe de sintaxe pois por traz tudo é funcao!
class Lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes , ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addlancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach( l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaLuz = new Lancamento('Luz', -120)

const contas = new CicloFinanceiro(6, 2018)
contas.addlancamentos(salario, contaLuz)
console.log(contas.sumario())