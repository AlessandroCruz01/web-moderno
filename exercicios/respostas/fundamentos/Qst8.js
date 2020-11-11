/*08)​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu piorjogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.Exemplo:String: “10 20 20 8 25 3 0 30 1”Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuaçãoaconteceu no sétimo jogo.) */

const notes = (string) => {
    string = string.split(' ')//funcao que torna string em list, o parametro é o separador
    let recorde = Math.max(null, string)
    let menor = Math.min(null, string)

    return [recorde, menor]
}

console.log(notes('1 2 3 4 5 6 6 6 6 6 '))
