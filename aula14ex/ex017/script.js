let genTableElem = document.querySelector('button#generate-table')

genTableElem.addEventListener('click', generateTable)

function generateTable() {
    let numberValue = document.querySelector('input#number').value
    if (numberValue === '') {
        window.alert('Please, enter a number!')
    } else {
        let number = Number(numberValue);
        let tableElem = document.querySelector('select#table')
        tableElem.innerHTML = ''

        let c = 1
        while(c <= 10) {
            let optionElem = document.createElement('option')
            optionElem.id = `count${c}`
            optionElem.text = `${number} x ${c} = ${number * c}`
            optionElem.value = `c${c}`

            tableElem.appendChild(optionElem)

            c++
        }

        tableElem.addEventListener('change', copyOptionText)
    }
}

function copyOptionText() {
    let tableElem = document.querySelector('select#table')

    let selectedResult = tableElem.options[tableElem.selectedIndex].innerText;

    copyToClipboard(str=selectedResult)
}

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    showTooltip()
}

let tooltipSpan = document.querySelector('span.tooltiptext')

async function showTooltip() {
    tooltipSpan.style.visibility = 'visible'
    await sleep(2000)
    tooltipSpan.style.visibility = 'hidden'
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
