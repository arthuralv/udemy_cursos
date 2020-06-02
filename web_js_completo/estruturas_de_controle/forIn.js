const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notas) {
    console.log(notas[i])
}

const pessoa = {
    nome: 'Arthur', 
    idade: 11,
    sexo: 'Masculino'
}

for (atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

// Faz mais sentido usar for-in em objetos do que arrays
