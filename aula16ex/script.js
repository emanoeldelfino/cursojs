const numInput = document.querySelector('input#num')
const addButton = document.querySelector('button#add')
const finishButton = document.querySelector('button#finish')
// const selectElem = document.querySelector('select#nums')
const resDiv = document.querySelector('div#res')

addButton.addEventListener('click', addNumToSelect)
finishButton.addEventListener('click', analyzeNums)

let nums = []

function checkArray(arr) {
    let maxNum;
    let minNum;
    let sum = 0;
    const arrSize = arr.length

    for (let elem of arr) {
        if (maxNum === undefined || elem > maxNum) {
            maxNum = elem;
        }

        if (minNum === undefined || elem < minNum) {
            minNum = elem;
        }

        sum += elem;
    }

    const mean = sum / arrSize

    return { 'max': maxNum, 'min': minNum, 'sum': sum, 'arrSize': arrSize, mean: mean }
}

function newElem(elem, innerTxt, parentElemSel, value = '') {
    const parentElem = document.querySelector(parentElemSel)
    let nElem = document.createElement(elem)
    nElem.value = value
    nElem.innerText = innerTxt
    // optionElem.id = `num${num}`
    parentElem.appendChild(nElem)
}

function newElems(elemsNItxt, parentElemSel, repeat = 1, value = '') {
    const parentElem = document.querySelector(parentElemSel)
    if (repeat > 0) {
        for (let i = 0; i < repeat; i++) {
            for (let [elem, innerTxt] of elemsNItxt) {
                newElem(
                    elem = elem,
                    innerTxt = innerTxt,
                    parentElemSel = parentElemSel
                )
            }
        }
    } else {
        console.log('Invalid operation.')
    }
}

function addNumToSelect() {
    resDiv.innerHTML = ''
    let numValue = numInput.value
    if (numValue.length > 0) {
        num = Number(numValue)
        if (num < 1 || num > 100) {
            alert('You must enter a number between 1 and 100.')
        } else if (nums.includes(num)) {
            alert('Value already found in list.')
        } else {
            nums.push(num)

            newElem(elem = 'option',
                innerTxt = `Valor ${num} adicionado.`,
                parentElemSel = 'select#nums',
                value = num
            )
        }
    } else {
        alert('You must enter a number!')
    }
}

function analyzeNums() {
    if (nums.length > 0) {
        const check = checkArray(nums)

        const elems = [
            ['p', `Ao todo, temos ${check.arrSize} números cadastrados.`],
            ['p', `O maior valor informado foi ${check.max}.`],
            ['p', `O menor valor informado foi ${check.min}.`],
            ['p', `Somando todos os valores, temos ${check.sum}.`],
            ['p', `A média dos valores digitados é ${check.mean}.`]
        ]

        newElems(
            elemsNItxt = elems,
            parentElemSel = 'div#res'
        )
    } else {
        alert('You must add numbers to finish!')
    }
}
