require('./global')

console.log(MinhaApp.saudacao())

//perceba que mesmo estando no global podemos alterar os dados deste objeto
MinhaApp.nome = 'Eita'

console.log(MinhaApp.nome)
//para evitarmos esta reacao estranha , podemos usar o freeze para congelar o objeto!