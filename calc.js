const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')
const output = calculator.querySelector('.calculator_output')

keys.addEventListener('click', b => {
    if (b.target.matches('button')) {
        const key = b.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const outNum = output.textContent;

        let array = keys.children
        //array.forEach(k => {k.classList.remove('isClicked')})

        if(!action) {
            if(outNum === '0') {
                output.textContent = keyContent
            }
            else {
                output.textContent = outNum + keyContent
            }
        }
        if (action === 'add' || action === 'sub' ||action === 'mul' ||action === 'div') {
            key.classList.add('isClicked')
        }
        if (action === 'calc') {}
        if (action === 'cls') {
            output.textContent = '0'
        }
        if (action === 'dec' && outNum.charAt(outNum.length-1) != '.') {
            output.textContent = outNum + keyContent
        }
    }
})

keys.addEventListener('hover', h => {
    console.log('hover')
})