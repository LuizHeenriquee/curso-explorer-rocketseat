function Person(name, age, course) {
    this.name = name = 'Luiz Henrique'
    this.age = age = 22
    this.course = course = 'Sistemas de Informação'
    this.message = function() {
        return `O aluno ${this.name} do curso de ${this.course} tem ${this.age} anos.`
    }
}

const eleaga = new Person()
console.log(eleaga.message())