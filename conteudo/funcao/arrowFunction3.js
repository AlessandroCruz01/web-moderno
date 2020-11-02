let comparaComThis = function (param) {
    console.log( this === param )
}

comparaComThis(global)

//No Browser
/*
comparaComThis(window)
VM3275:2 true -> deu true
undefined
*/

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param =>  console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(this)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

//O this do arrow nao muda!!!!!!!!!!!!!
