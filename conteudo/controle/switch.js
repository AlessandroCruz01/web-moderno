const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) { //flor arrendondamneto pra baixo
        case 10:
        case 9:
            console.log('Quadro de Honra') //Existem algumas observacoes para serem falados sobreo switch.. 
            /*1° vc pode ter dois cases dessa forma. o case 10: vazio ele ja passa para o de baixo. ou seja se for 10 ou 9 ele fara o que tem a seguir
            
            para cada case podemos ter uma sentenca de codigos. porem assim ficaria repetido... ou seja se houver varios cases com a msm sentenca de codigo pra evitar esse problema. deixamos em branco e ele entendera que é um ou outro...
            
            OBS o switch tem um comportamento estranho, em que ele entra num case e sai executando tudo a baixo. nesse caso precisamos  usar a palavra reservada break*/
            break

        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao')
            break
            
        case 3, 2, 1, 0:
            console.log('Reprovado')
            break

        default:
        console.log('Nota invalida')
    }
}

//swith é uma selecao multipla
//ele n ver verdadeiro ou falso
//o defaut pode estar em qq posicao mas precisa add o breack
//podemos ter varios cases associados a uma msm sentenca de codigo
//podemos usar apenas uma palavra reservada case e separar o restante dos casos por virgula...



imprimirResultado(9)
imprimirResultado(5)
imprimirResultado(5.69)
imprimirResultado(7)
imprimirResultado(2.61)
imprimirResultado()

