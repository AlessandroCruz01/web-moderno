/*Existe uma palavra reservada que mtas linguagens usam
Python usa o self
Js usa o this

O this seria uma forma de referenciar o objeto atual daquela execucao...

Um exemplo...
temos uma classe, dentro da classe podemos criar objetos. a classe é como se fosse um molde

exeplo

temos uma classe aluno que possui nome e nota. a partir dai podemos criar objetos cm esses dois atributos. objetos independetes usando o molde da classe.

o This entra nesse meio. ele acessa o dono daquela execucao. no python usamos o self como construtor..

Em js o conceito de This pode variar dependendo de como a funcao é chamada...

#Vamos ao browser...

function f1() { console.log( this === window ) } //vamos testar o this no ambiente global
undefined
f1()
VM186:1 true //retorno verdade. this === window
undefined
document.getElementsByTagName('body')[0].onclick = f1 //vamos fazer uma funcao para quando clicar na tela chama a funcao
ƒ f1() { console.log( this === window ) }
VM186:1 false //false kkk
function f2() { console.log(this === document) }
undefined
document.getElementsByTagName('body')[0].onclick = f2
ƒ f2() { console.log(this === document) }
VM445:1 false
const body = document.getElementsByTagName('body')[0]
undefined
function f2() { console.log(this === body) }
undefined
3VM445:1 false
f2
ƒ f2() { console.log(this === body) }
function f2() { console.log(this === body) }
undefined
f2
ƒ f2() { console.log(this === body) }
VM445:1 false
document.getElementsByTagName('body')[0].onclick = f2
ƒ f2() { console.log(this === body) }


perceba que dependendo de quem chama, o this varia nas referencias, uma hora aponta para o window que é o global no browser e outra ele aponta para o body que é o corpo da pagina......

*Arrow Function

existiram dois grandes motivos pra ser criado o arraw function..
um deles e a criacao de uma sintaxe mais reduzida...

exemplo:
const f3 = () => console.log(this == window)

o outro grande motivo é que em funcoes arrow temos um This que nao varia

uma funcao tradicional. o this pode variar
usando arraw function. o this nao varia!

o this é difinido no contexto em que a funcao foi escrita!

por exempo, se uma funcao arrow for escrita no contexto global. ela sempre sera global!!!!!!!

*/