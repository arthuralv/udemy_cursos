const dobro1 = function (a) {
    return 2 * a
}

console.log(dobro1(10))

const dobro2 = (a) => {
    return 2 * a
}

console.log(dobro2(10))

const dobro3 = a => 2 * a // return está implícito

console.log(dobro3(10))

const ola1 = function () {
    return 'Olá'
}

console.log(ola1())

const ola2 = () => {
    return 'Olá'
}

console.log(ola2())

const ola3 = () => 'Olá'

console.log(ola3())

const ola4 = _ => 'Olá'
