const contarCaractere = (x, palavra) => {

    return palavra.split(x).length - 1
}

console.log(contarCaractere("r", "A sorte  favorece os audazes"))