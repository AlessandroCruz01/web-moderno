//tratamento de erros

function tratarErroELancar(erro) { //6 - funcao para tratamento do erro...
    //throw new Error('........') /* podemos passar uma msg */
    //throw 10  /* Podemos lancar um numero qualquer */
    //throw true /* Podemos lancar um valor verdadeiro ou falso */
    //throw 'msg' /* Podemos lancar uma string */
    /*throw { //Podemos lancar um objeto
        nome: erro.name,
        msg: erro.messege,
        date: new Date
    }*/
}
function ImprimirNomeGritado(obj) {//1 - Vamos criar uma funcao qualquer...
    try { //4 - try é um bloco de codigo que contem um codigo que julgamos que pode causar um erro (try = tentar)
        console.log(obj.name,toUpperCase() + '!!!!!!!')// 2 - perceba que criamos um atributo name escrito em ingles
    } catch (e) { // 5 - o catch é o bloco que usamos para tratar o erro. o parametro (e) é o erro capturado pelo catch
        tratarErroELancar(e)
    } finally {
        console.log('Final') // o finale é executado apos passar pelo try dando certou ou nao
    }
}

const obj = { nome: 'Roberto' } // 3 - aqui chamamos a funco porem colocamos o atributo escrito em portugues. o que causará um erro
ImprimirNomeGritado(obj)