//console.log(global)

//CUIDADO PARA MECHER NO GLOBAL DO NODE, POIS SEMPRE QUE MECHEMOS NO GLOBAL AS CHANCES DE DAR PROBLEMAS É SEMPRE MAIOR
global.MinhaApp = {
    saudacao(){
        return 'Estou no global'
    }
}
//Isso quer dizer que qualquer outro arquivo pode ve-lo, va para globalCliente.js
