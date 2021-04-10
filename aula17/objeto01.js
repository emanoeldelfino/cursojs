let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        console.log(`${this.nome} do sexo ${this.sexo} engordou ${p} KGs.`)
        console.log(`Peso anterior: ${this.peso} KG.`)
        this.peso += p
        console.log(`Peso atual: ${this.peso} KG.`)
    }
}

amigo.engordar(2)
amigo.engordar(3)

// console.log(typeof amigo)  // object

// let array = []
// console.log(typeof array)  // object

// Objeto e Array tem a mesma classe/origem por isso ambos são objetos.
