let estudantes = [
    {
        nome: 'Luiz Henrique',
        notaPrimeiraProva: 10,
        notaSegundaProva: 8
    },
    {
        nome: 'Geovanna',
        notaPrimeiraProva: 7,
        notaSegundaProva: 10
    },
    {
        nome: 'Luiz Paulo',
        notaPrimeiraProva: 9,
        notaSegundaProva: 9
    },
    {
        nome: 'Belutti',
        notaPrimeiraProva: 3,
        notaSegundaProva: 6
    }
]

const media = (estudantes) => {
    let media = ((estudantes.notaPrimeiraProva + estudantes.notaSegundaProva) / 2).toFixed(1)
    if (media >= 7) {
        return `A média do aluno(a) é: ${media}
        Parabéns, ${estudantes.nome}! Você foi aprovado(a) no concurso!`
    } else {
        return `A média do aluno(a) é: ${media}
        Não foi dessa vez, ${estudantes.nome}! Você foi reprovado(a) no concurso.`
    }
}

for (let estudante of estudantes) {
    let res = media(estudante)
    alert(res)
}