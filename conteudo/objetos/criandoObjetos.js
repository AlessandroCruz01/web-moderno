//Object em JS
console.log(typeof Object, typeof new Object()) //perceba que o object é uma funcao e o new object é a criacao de um novo objeto

//vamos ver diversas formas de criar objetos

    //1 - usando notacao literal
    const obj1 = {

    }
    console.log(obj1)

    //2 - usando o new object
    const obj2 = new Object
    console.log(obj2)


    //3 - Funcao contrutora
    function Produto(nome, preco, desconto) {
        this.nome = nome //lembre-se do self do python, no caso o this serve para tornar a variavel nome, publica
        //lembre-se ou uma coisa é publica ou prinvada
        this.getPrecoComDesconto = () => {
            return (preco * (1 - desconto)).toFixed(2)
        }
    }

    const p1 = new Produto('Caneta', 7.99, 0.15)
    const p2 = new Produto('Notebook', 2998.99, 0.25)
    console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

    //4 - Funcao Factory - Factory é um padrao de projeto, que nada mais é que uma funcao que criar objetos
    function criaFuncionario(nome, salariobase, faltas){
        return {
            nome,
            salariobase,
            getSalario() {
                return (salariobase / 30) * (30 - faltas)
            }
        }
    }

    const f1 = criaFuncionario('jao', 7980.00, 4)
    const f2 = criaFuncionario('maria', 111400, 5)
    console.log(f1.getSalario(), f2.getSalario())

    //5 - *MENÇÃO - Object.create
    const filha = Object.create(null)
    filha.nome = 'ana'
    console.log(filha)

    //UMA FUNÇÃO FAMOSA QUE RETORNA OBJETO...
    const fromJSON = JSON.parse('{"info": "Sou JSON"}')
    console.log(fromJSON.info)
