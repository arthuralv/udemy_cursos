const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado.')
            break
        case 6, 5, 4:
            console.log('Recuperação')
            break
        case 3, 2, 1, 0:
            console.log('Reprovado')    
            break
        default:
            console.log('Nota Inválida')

    }
    console.log('Fim!')
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado()