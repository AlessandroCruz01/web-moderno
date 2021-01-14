//Vamos ver algumas formas de exportar o modulo...

console.log(this)

this.ola = 'Fala pessoal' //dentro do modulo node existe um this... (mais a frente veremos para quem o this aponta neste caso)

exports.bemVindo = 'BEM VINDO' //usando o exportes

module.exports.ateLogo = 'Até a proxima' //Forma classica de exportar e mais comum