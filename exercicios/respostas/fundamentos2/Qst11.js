const removePropriedade = (obj, atr) => {
    const copia = Object.assign({}, obj)
    delete copia[atr]
    return copia
} 

console.log(removePropriedade({a:1, b:2}, "a"))