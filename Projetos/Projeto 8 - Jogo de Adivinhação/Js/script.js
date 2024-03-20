// Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const winnerMessage = document.querySelector('.screen2 h2')
const randomNumber = Math.round(Math.random() * 10)
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let attempts = 1

// Funções
const handleTryClick = (event) => {
    event.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')

    if (Number(inputNumber.value) == randomNumber && attempts == 1) {
        toggleScreen()
        winnerMessage.innerText = `Parabéns! Você acertou de primeira!`
    } else if (Number(inputNumber.value) == randomNumber) {
        toggleScreen()
        winnerMessage.innerText = `Parabéns! Você acertou em ${attempts} tentativas!`
    }

    inputNumber.value = ''
    attempts++
}

const handleResetClick = () => {
    toggleScreen()
    attempts = 1
    location.reload()
}

const toggleScreen = () => {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)