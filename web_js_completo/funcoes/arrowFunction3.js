let comparaComThis = function (objeto) {
    console.log(this === objeto)
}

comparaComThis(global)

const comparaComThisArrow = objeto => { console.log(this === objeto) }

comparaComThisArrow(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj)