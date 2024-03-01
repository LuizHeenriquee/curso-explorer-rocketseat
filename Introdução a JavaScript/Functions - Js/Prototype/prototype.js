let animal = {
    classe: 'Mamífero',
    emiteSom: function() {
        console.log('Som característico')
    }
}

let cachorro = Object.create(animal)
cachorro.raça = 'Husky Siberiano'
cachorro.nome = 'Kobe'
cachorro.som = 'Au Au!'

console.log(cachorro.classe)
console.log(cachorro.raça)
console.log(cachorro.nome)
console.log(cachorro.som)