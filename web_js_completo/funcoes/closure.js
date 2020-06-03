// Closure é um escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    dentro = () => x
    
    /* function dentro() {
        return x
    } */

    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())