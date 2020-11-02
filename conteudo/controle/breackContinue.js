/* O break tem o efeito no desvio de fluxo..
ele influenci em:
for 
while 
switch

O continue ja influencia no bloco.. mas ele é desencorajado. porque nao é mto bom vc ficar desviando fluxo no codigo

vamos ver para efeito de conhecimento mas é mto desencorajado!*/

const nums = [1,2,3,4,5,6,7,8,9,10]
for (i in nums) {
    if (i == 5) {
        break //o break nao age sobre  bloco if. no caso ele vai atuar sobre o bloxo mais proximo ou seja ele vai atuar encima do bloco for
    }
    console.log(nums[i]) //resumo. o break age desviando saindo do laco atual e indo pro laco corrente
}

console.log()//pular uma linha

for (y in nums) {
    if (y == 5) {
        continue //O continue ele vai interromper a repeticao atual, e vai para proxima repeticao. ele nao age encima do laco if , ele vai agir encima do for!
    }
    console.log(y + '->' + nums[y]) //o continue ja age apenas pausando o a repeticao atual e indo para proxiam iteracao
}


//NUNCA USE ESSA ESTRUTURA!
// externo: for (a in nums) {
//     for (b in nums) {
//         if (a == 2 && b == 3) {
//             break
//         }
//         console.log(a,b)
//     }
// }