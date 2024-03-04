let animal = {
    classe: 'Mamífero',
    emiteSom: function() {
        console.log('Som Característico')
    }
}

cachorro = Object.create(animal)
cachorro.raça = 'Husky Siberiano'
cachorro.nome = 'Kobe'
cachorro.som = 'Au Au!'

console.log(`O animal cachorro é da classe dos ${cachorro.classe}s.`)
console.log(`O cão é um ${cachorro.raça}`)
console.log(`O nome dele é ${cachorro.nome}`)
console.log(`O ${cachorro.raça}, ${cachorro.nome}, faz ${cachorro.som}`)