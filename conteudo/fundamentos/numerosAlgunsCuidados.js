console.log(7/0) //O js tem uma tipagem chamada infinity, o qual retorna uma msg e nao dara erro.

console.log('10' / 2) //O js tem suas estranhesas, uma delas é que ele pega essa sentenca que normalmente daria erro em outras linguagens e converte por si so. Ou seja ele sozinho ja observa o tipo raiz, e esse tipo convertido atende aos requisitos para operacao. entao ele sozinho converte e faz a operacao.

//em outros casos isso daria erro. por exemplo, se usarmos uma virgula....

console.log('10,2' / 2) //O retorno sera um erro NaN, ou seja, isso n é um numero valido

console.log('Show!' / 2) // Em algumas linguagens como python, ele repetiria esse numero duas vezes, mas em js isso n ocorre. ele traz a msm msg de NaN

console.log(0.1 + 0.7)//Perceba que devido a uma especificacao do IEEE, que segue um padrao que causa uma certa imprecisao, isso pq essa especificacao é mais rapida.