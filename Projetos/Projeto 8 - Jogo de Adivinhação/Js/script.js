const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const winnerMessage = document.querySelector('.screen2 h2')
const randomNumber = Math.round(Math.random() * 10)
let attempts = 1

const handleTryClick = (event) => {
    event.preventDefault()

    const inputNumber = document.querySelector('#inputNumber')

    if (Number(inputNumber.value) == randomNumber && attempts == 1) {
        screen1.classList.add('hide')
        screen2.classList.remove('hide')
        winnerMessage.innerText = `Parabéns! Você acertou de primeira!`
    } else if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add('hide')
        screen2.classList.remove('hide')
        winnerMessage.innerText = `Parabéns! Você acertou em ${attempts} tentativas!`
    }

    inputNumber.value = ''
    attempts++
}

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function() {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    attempts = 1
    location.reload()
})