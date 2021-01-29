// Com promise...

/*
Síncrono ou assíncrono diz respeito ao fluxo de execução de um programa. Quando uma operação executa completamente antes de passar o controle à seguinte, a execução é síncrona. Esse é o método padrão de execução de código – nas linguagens que eu conheço, e imagino que também na maioria das que não conheço.

Quando uma ou mais operações são demoradas, pode ser interessante executá-las de maneira assíncrona, para que o restante do código possa ser executado sem precisar esperar que elas terminem. Nesse caso, o código seguinte ao comando que dispara a operação assíncrona não pode contar com o resultado dessa operação, naturalmente. Tudo que dependa do resultado da operação precisa ser feito somente quando ela tiver sido concluída, e geralmente isso ocorre num callback, isto é, um bloco de código (geralmente uma função ou método) informado ao comando que inicia a operação assíncrona.
*/

const http = require('http')

const getTurma = (letra) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }

            })
        })
    })
}

// Recurso do ES8
//Objetivo de simplificara o uso de promises....

//A primiera coisa que devemos fazer, é criar uma funcao e marcar ela com o async, a plavra await so vai funcionar para funcao marcada com async
let obterAlunos = async () => {
    const turmaA = await getTurma('A')
    const turmaB = await getTurma('B')
    const turmaC = await getTurma('C')

    return [].concat(turmaA, turmaB, turmaC)
} //O retorno de uma funcao async sera uma AsyncFunction

obterAlunos()
    .then(alunos => alunos.map( a => a.nome ))
    .then(nomes => console.log(nomes))

