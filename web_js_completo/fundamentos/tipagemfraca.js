let qualquer = 'Legal'

verificacao(qualquer)

qualquer = 123

verificacao(qualquer)

// Evitar nome genérico ou sigla para variáveis
let valor = ''
let numero = 1
let pqp = false 


function verificacao(variavel1){
    if (typeof variavel1 == typeof ''){
        console.log('É string')
    } else {
        console.log('É diferente')
    }
    console.log(typeof variavel1)
}