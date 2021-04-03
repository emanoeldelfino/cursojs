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

        let n = 1
        let result
        while(n <= 10) {
            result = number * n
            tableElem.innerHTML += `<option id="result${n}">${number} x ${n} = ${result}</option>`
            n++
        }
    }
}
