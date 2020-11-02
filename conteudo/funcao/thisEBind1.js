//vamos ver como amarrar o this usando o bind

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) //perceba, se retirar o this a funcao falar n vai saber onde esta variavel saudaco. lembre-se que o this é como se fosse o contrutor ou seja no contexto da funcao falar. ele n sabe quem é saudacoa..
    }
}

pessoa.falar()

const falar = pessoa.falar

falar()// conflito entre paradigmas : funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //O bind é o responsavel por amarrar o this ao objeto passado por parametro
falarDePessoa()

