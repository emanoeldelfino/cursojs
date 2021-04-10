let num = document.querySelector('input#fnum')
let select = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let qRandomNums = document.querySelector('input#qrnums')
let addButton = document.querySelector('input[value="Adicionar"]')
let nums = []

function isInRange(num, start, end) {
    if (start < end) {
        if (Number(num) >= start && Number(num) <= end) {
            return true
        } else {
            return false
        }
    } else {
        console.log('Invalid operation.')
    }
}

function update(ar = true) {
    if (num.value.length > 0) {
        if (isInRange(num.value, 1, 100)) {
            let numValue = Number(num.value)

            let words
            if (ar) {
                words = ['adicionado', 'já']
            } else {
                words = ['removido', 'não']
            }
            if (ar === (nums.indexOf(numValue) === -1)) {
                if (ar) {
                    nums.push(numValue)
                } else {
                    removeItemOnce(nums, numValue)
                }
                newElems([['option', `O valor ${numValue} foi ${words[0]}.`]], select)
            } else {
                window.alert(`Valor ${numValue} ${words[1]} encontrado na lista.`)
            }
        } else {
            window.alert('Valor deve estar entre 1 e 100.')
        }
    } else {
        window.alert('Insira um número.')
    }

    num.value = ''
    num.focus()
}

function adicionar() {
    if (num.value.length > 0) {
        if (isInRange(num.value, 1, 100) && nums.indexOf(Number(num.value)) === -1) {
            nums.push(Number(num.value))
            newElems([['option', `O valor ${num.value} foi adicionado`]], select)
        } else {
            window.alert('Valor inválido ou já encontrado na lista.')
        }
    } else {
        window.alert('Insira um número.')
    }
}

function finalizar() {
    res.innerHTML = ''
    if (nums.length > 0) {
        const lenNums = nums.length
        const maxNums = Math.max(...nums)
        const minNums = Math.min(...nums)
        const sumNums = nums.reduce((x, y) => x + y, 0)
        const meanNums = sumNums / lenNums
        newElems([
            ['p', `Ao todo temos ${lenNums} número(s) cadastrados.`],
            ['p', `O maior valor informado foi ${maxNums}.`],
            ['p', `O menor valor informado foi ${minNums}.`],
            ['p', `Somando os valores, temos ${sumNums}.`],
            ['p', `A média dos valores é ${meanNums}.`]
        ],
            res)
    } else {
        window.alert('Lista vazia inválida.')
    }
}

function newElems(elemsNtxts, parentElem, value = '') {
    for ([elem, txt] of elemsNtxts) {
        const newElem = document.createElement(elem)
        newElem.innerText = txt
        newElem.value = value
        parentElem.appendChild(newElem)
    }
}

function range(start, end, step = 1) {
    if (start < end && step > 0 || start > end && step < 0) {
        let arr = []
        for (i = start; i < end; i += step) {
            arr.push(i)
        }
        return arr
    } else {
        return null
    }
}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value)
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr
}

function choice(arr, num) {
    if (arr.length >= num) {
        if (num <= 0) {
            return null
        } else {
            let copyArr = [...arr]
            let sortedNums = []
            for (i = 0; i < num; i++) {
                let sortedNum = randomElem(copyArr)

                removeItemOnce(copyArr, sortedNum)

                sortedNums.push(sortedNum)
            }

            return sortedNums;
        }
    } else {
        return null
    }
}

function randomElem(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function choiceRandomNum() {
    res.innerHTML = ''
    select.innerHTML = ''
    nums = []
    if (qRandomNums.value.length <= 0) {
        alert('Você deve inserir a quantidade de números a ser gerada.')
    } else {
        let quantRandomNums = Number(qRandomNums.value)
        if (quantRandomNums <= 0 || quantRandomNums > 100) {
            alert('Valor de números aleatórios inválido.')
        } else {
            randomNums = choice(range(1, 100), quantRandomNums)
            for (randomNum of randomNums) {
                num.value = randomNum
                addButton.click()
            }
            num.value = ''
        }
    }
}
