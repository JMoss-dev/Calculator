const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')
const output = calculator.querySelector('.calculator_output')

var firstValue = ''
var op = ''
var secondValue = ''
var opPressed = false
var dotUsed = false

keys.addEventListener('click', b => {
    if (b.target.matches('button')) {
        const key = b.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const outNum = output.textContent

        Array.from(keys.getElementsByClassName('calculator_key')).forEach(k => {
            k.classList.remove('isClicked')
        })


        if(!action) {
            if(outNum === '0' || opPressed) {
                output.textContent = keyContent
                opPressed = false
                dotUsed = false
            }
            else {
                output.textContent = outNum + keyContent
            }
        }
        if (action === 'add' || action === 'sub' ||action === 'mul' ||action === 'div') {
            key.classList.add('isClicked')

            opPressed = true

            firstValue = outNum
            op = action
        }
        if (action === 'calc') {
            secondValue = outNum

            firstValue = calculate()
            output.textContent = firstValue

        }
        if (action === 'cls') {
            output.textContent = '0'

            opPressed = false
            dotUsed = false
        }
        if (action === 'dec' && !dotUsed) {
            output.textContent = outNum + keyContent
            dotUsed = true
        }
    }
})

//TODO
keys.addEventListener('hover', h => {
    console.log('hover')
})

function calculate() {
    var result = ''

    if (op === 'add') {
        result = parseFloat(firstValue) + parseFloat(secondValue)
    }
    if (op === 'sub') {
        result = parseFloat(firstValue) - parseFloat(secondValue)
    }
    if (op === 'mul') {
        result = parseFloat(firstValue) * parseFloat(secondValue)
    }
    if (op === 'div') {
        result = parseFloat(firstValue) / parseFloat(secondValue)
    }

    return result.toFixed(2)
}