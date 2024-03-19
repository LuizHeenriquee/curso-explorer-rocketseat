const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const randomNumber = Math.round(Math.random() * 10)
let attempts = 1

const handleTryClick = (event) => {
    event.preventDefault() // Essa linha está aqui para evitar que seja feito o padrão ao clicar no button. Isso se deve (neste caso) pois o button está dentro de um form, logo ele "envia e recarrega" a página. Com essa linha, essas funções são evitadas.

    const inputNumber = document.querySelector('#inputNumber')

    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add('hide')
        screen2.classList.remove('hide')
        document.querySelector('.screen2 h2').innerText = `Você acertou em ${attempts} tentativas!`
    }

    inputNumber.value = ''
    attempts++
}

// Eventos
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

// Função CallBack
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function () {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    attempts = 1
})