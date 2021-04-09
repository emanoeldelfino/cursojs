let valores = [8, 1, 7, 4, 2, 9]

// console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

function logAllElemsArr(array) {
    // Percurso (para exibição no vetor)
    for (let pos = 0; pos < array.length; pos++) {
        console.log(`Na posição ${pos} há o valor ${array[pos]}.`)
    }

    // Simplificado com in (enumera)
    for (let pos in array) {
        console.log(array[pos])
    }

    // Simplificado com of (itera sobre os elementos do array)
    // for (const elem of array) {
    //     console.log(elem)
    // }

    // Propriedade de arrays que serve como o for of.
    // array.forEach(item => console.log(item));
}

logAllElemsArr(array=valores)
