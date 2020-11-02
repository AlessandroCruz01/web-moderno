
function compras(trabalho1 , trabalho2) {
    const compraSorvete = trabalho1 || trabalho2 //OU Se um dos dois for verdade, o resultado é verdade
    const comprarTv50 = trabalho1 && trabalho2 // E Ambos tem que ser verdade, um deles sendo falso o resultado é falso
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) //Operador bitwase, ou exclusivo
    const comprarTv32 = trabalho1 != trabalho2 //operador ou exclusivo
    const manterSaudavel = !compraSorvete

    return { compraSorvete, comprarTv50, comprarTv32, manterSaudavel }//note que nao passamos chave e valor, neste caso é um recurso mais inteligente do ES2015. Onde colocamos direto os valores e js automaticamente colocara a chave.
} 

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))