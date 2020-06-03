const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback

let notasBaixas = []

for (const elem of notas) {
    if (elem < 7) {
        notasBaixas.push(elem)
    }
}

console.log(notasBaixas)

// com callback

const aprovacao = nota => nota >= 7
const notasAltas = notas.filter(aprovacao)

console.log(notasAltas)