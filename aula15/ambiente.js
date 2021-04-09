let nums = [5, 8, 2, 9, 3]

console.log(`Vetor: ${nums}`)  // Vetor: 5,8,2,9,3
console.log('Vetor:', nums) // [ 5, 8, 2, 9, 3 ]

nums[3] = 6
nums.push(10) // nums[nums.length] = 10;

// nums[10] = 10; // [ 5, 8, 2, 9, 3, <5 empty items>, 10 ]

// nums[-1] = 10; // [ 5, 8, 2, 9, 3, '-1': 10 ]

console.log(`Vetor atualizado: ${nums} /`, nums)

// nums.sort()  // [ 10, 2, 3, 5, 6, 8 ]
nums.sort((a, b) => a - b) // [ 2, 3, 5, 6, 8, 10 ]

console.log(nums)
console.log(`Quatidade de elementos no vetor: ${nums.length}`)
console.log(`O primeiro valor do vetor é ${nums[0]}.`)

function findElem(arr, elem) {
    const pos = arr.indexOf(elem)
    if (pos !== -1) {
        console.log(`O elemento ${elem} está na posição ${pos}.`)
    } else {
        console.log(`O elemento ${elem} não foi encontrado.`)
    }
}

findElem(nums, 8)
findElem(nums, 4)
