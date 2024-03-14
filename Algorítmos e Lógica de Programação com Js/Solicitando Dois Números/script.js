const sum = (number1, number2) => {
    let sum = Number(number1) + Number(number2)
    return `A soma dos números é ${sum}`
}

const subtraction = (number1, number2) => {
    let subtraction = Number(number1) - Number(number2)
    return `A subtração dos números é ${subtraction}`
}

const multiplication = (number1, number2) => {
    let multiplication = Number(number1) * Number(number2)
    return `A multiplicação dos números é ${multiplication}`
}

const division = (number1, number2) => {
    let division = (Number(number1) / Number(number2)).toFixed(1)
    return `A divisão dos números é ${division}`
}

const rest = (number1, number2) => {
    let rest = Number(number1) % Number(number2)
    return `O resto da divisão dos números é: ${rest}`
}

const isSumOdd = (number1, number2) => {
    let isSumOdd = Number(number1) + Number(number2)
    if (isSumOdd % 2 == 0) {
        return `A soma dos dois número é par: ${isSumOdd}`
    } else {
        return `A soma é ímpar ${isSumOdd}`
    }
}

const sameNumbers = (number1, number2) => {
    let sameNumbers = Number(number1) === Number(number2)
    if (sameNumbers) {
        return `Os números são exatamente iguais`
    } else {
        `Os números não são exatamente iguais`
    }
}

let firstNumber = prompt('Digite o primeiro número:')
let secondNumber = prompt('Digite o segundo número:')

let soma = sum(firstNumber, secondNumber)
let subtracao = subtraction(firstNumber, secondNumber)
let multiplicacao = multiplication(firstNumber,secondNumber)
let divisao = division(firstNumber,secondNumber)
let resto = rest(firstNumber,secondNumber)
let somaPar = isSumOdd(firstNumber,secondNumber)
let numerosIguais = sameNumbers(firstNumber,secondNumber)

for (let i = 0; i < 1; i++) {
    alert(soma)
    alert(subtracao)
    alert(multiplicacao)
    alert(divisao)
    alert(resto)
    alert(somaPar)
    alert(numerosIguais)
}

alert('Fim da execução')