const estaEntre = (numero, minimo, maximo, inclusivo = false) => {
    if (numero >= minimo && numero <= maximo) {
        return true
    } else if (inclusivo === true && (numero === minimo || numero === maximo)){
        return true
    } else {
        return false
    }
}

console.log(estaEntre(50, 50, 100))
console.log(estaEntre(16, 100, 160))
console.log(estaEntre(3, 150, 3))
console.log(estaEntre(3, 150, 3, true))
