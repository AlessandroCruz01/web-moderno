const nome = 'Rebeca'
const template = `
    Olá 
    ${nome}!` //Facilita na concatenacao sendo possivel fazer quebras de linhas, e adicao de variaveis dentro do texto a partir da expressao ${} . Lembrando que a crase `` é obrigatoria

console.log(template)

//expressoes...

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() //Essa é uma pequena funcao que torna o texto contido na variavel "texto" que e dado por parametro em maiusculo

console.log(`Ei ... ${up('Cuidado')}!`) //Aqui usando a msm ideia de template strign, chamados a funcao a qual damos por parametro a palavra cuidado o qual torna a palavra maiuscula