const a = 1
const b = 2
const c = 3

// antigamente antes do ES6 tinhamos que usar a seguinte duplicidade
const obj1 = {a: a, b: b, c: c}

// com o ES6 isso nao é mais necessario
const obj2 = {a, b, c}

// vejamos
console.log(obj1, obj2)

// uma outra melhoria vem quando quer criar umm objeto dinamicamnete usando string
const nomeAttr = 'nota'
const valorAttr = 8

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

// Outra simplificada sobre as funcoes dentro de obejto

const obj5 = {
    // forma antiga
    funcao1: function() {
        // ...
    },

    // forma nova
    funcao2() {

    }
}
console.log(obj5)