const startElem = document.querySelector('div#inputs div input#start')
const endElem = document.querySelector('div#inputs div input#end')
const stepElem = document.querySelector('div#inputs div input#step')
const countElem = document.querySelector('div#inputs button#count')
const msgElem = document.querySelector('div#text p#msg')
const textCountElem = document.querySelector('div#text p#count')

const handEmoji = String.fromCodePoint(0x1F449)
const flagEmoji = String.fromCodePoint(0x1F3C1)

countElem.addEventListener('click', loop)

function notEmptyString(str) {
    return str !== ''
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let counting = false;

async function loop() {
    if (!counting) {
        const values = [startElem.value, endElem.value, stepElem.value]

        if (values.every(notEmptyString)) {
            const start = Number(values[0])
            const end = Number(values[1])
            let step = Number(values[2])

            if (step < 0) {
                window.alert('Invalid step. Considering positive step.')
                step = Math.abs(step)
            } else if (step == 0) {
                window.alert('Invalid step. Considering step 1.')
                step = 1;
            }

            msgElem.innerText = 'Contando...'

            textCountElem.innerText = ''

            counting = true;

            if (start < end) {
                
                for(let c = start; c <= end; c += step) {
                    textCountElem.innerText += `${c} ${handEmoji}`

                    await sleep(500)
                }
            } else {
                for(let c = start; c >= end; c -= step) {
                    textCountElem.innerText += `${c} ${handEmoji}`

                    await sleep(500)
                }
            }

            counting = false;

            textCountElem.innerText += ` ${flagEmoji}`

            // if (step < 0 && start < end) {
            //     window.alert('For negative step, start must be greater than or qual to end')
            // } else if (step > 0 && start > end) {
            //     window.alert('For positive step, end must be greater than or equal to start')
            // } else {
            //     if (step < 0) {
            //         negative = true
            //         [start, end, step] = [start, end, step].map((num) => {
            //             Math.abs(num)
            //         })
            //     }
            // }
        } else {
            alert('Impossible to count. You must insert all the inputs.')
        }
    } else {
        alert('Counting in progress. Wait it to start a new one!')
    }
}
