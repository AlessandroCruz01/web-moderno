for (let i of 'Cod3er'){
    console.log(i)
}//perceba que ele percorre valores e nao indices, vamos fazer um teste mais aparente

const assuntosEcma = [ 'Map', 'Set', 'Promise' ]

for (let i in assuntosEcma){
    console.log(i)
}//perceba que da forma comum usando o for, ele percorre pelos indices

for (let i of assuntosEcma){
    console.log(i)
}

const assuntosMap = new Map([
    ['map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)//pegar chaves
}

for (let valor of assuntosMap.values()){
    console.log(valor)//pegar valores
}

for (let [chave, valor] of assuntosMap.entries()){
    console.log(chave, valor)// chave valor
}