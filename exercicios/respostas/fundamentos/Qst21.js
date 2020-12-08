/* 21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menosde 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados comidade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
 */ 

const convenio = (idadeAdicional) => {

    if (idadeAdicional < 10) {
        return `Seu convenio + adicional de crinça com menos de 10 (${idadeAdicional}) anos custará: ${100 + 80} reais`
    } else if (idadeAdicional>=10 && idadeAdicional<=30) {
        return `Seu convenio + adicional de crinça/jovem/adulto com idade entre de 10 e 30 anos (${idadeAdicional}) anos custará: ${100 + 50} reais`        
    } else if (idadeAdicional>30 && idadeAdicional<=60) {
        return `Seu convenio + adicional de crinça/jovem/adulto com idade entre de 30 e 60 anos (${idadeAdicional}) anos custará: ${100 + 95} reais`       
    } else {
        return `Seu convenio + adicional de crinça/jovem/adulto com idade acima de 60 anos (${idadeAdicional}) anos custará: ${100 + 130} reais`       
    }
}

console.log(convenio(9))
console.log(convenio(11))
console.log(convenio(31))
console.log(convenio(69))

