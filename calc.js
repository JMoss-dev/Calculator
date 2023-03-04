const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')
const output = calculator.querySelector('.calculator_output')

var firstValue = ''
var op = ''
var secondValue = ''

keys.addEventListener('click', b => {
    if (b.target.matches('button')) {
        const key = b.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const outNum = output.textContent
        const previousKeyType = calculator.dataset.previousKeyType

        Array.from(keys.getElementsByClassName('calculator_key')).forEach(k => {
            k.classList.remove('isClicked')
        })


        if(!action) {
            if(outNum === '0' || previousKeyType === 'operator') {
                output.textContent = keyContent
            }
            else {
                output.textContent = outNum + keyContent
            }
        }
        if (action === 'add' || action === 'sub' ||action === 'mul' ||action === 'div') {
            key.classList.add('isClicked')
            //add attribute for calculation
            calculator.dataset.previousKeyType = 'operator'

            firstValue = outNum
            op = action
        }
        if (action === 'calc') {
            secondValue = outNum

            output.textContent = calculate()
        }
        if (action === 'cls') {
            output.textContent = '0'
        }
        if (action === 'dec' && outNum.charAt(outNum.length-1) != '.') {
            output.textContent = outNum + keyContent
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