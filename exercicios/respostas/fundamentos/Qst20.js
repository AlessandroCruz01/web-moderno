/*20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deveinformar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1 */

const cedulas = (valor) => {
    let notas = [100, 50, 10, 5, 1]
    let res = []
    while (valor > 0) {
        for (i in notas){
            if (valor >= notas[i]) {
                valor = valor - notas[i]
                res.push(notas[i])
            }
        }
    }



}

console.log(cedulas(18))