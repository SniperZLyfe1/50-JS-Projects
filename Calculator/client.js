const input = document.querySelector('input')
const controlsAll = document.querySelectorAll('.controls')

let arr = ['/','-', '+', '*' , '.','%']

controlsAll.forEach(control => {
    control.addEventListener('click', () => {
        if(input.value === '' && control.classList.contains('zero')) return
        if(/^\d+$/.test(control.innerHTML))  input.value += control.innerHTML
        if(control.classList.contains('addition') && input.value !== '' && !contains(input.value.at(-1),arr)) input.value += '+'
        if(control.classList.contains('multiplication') && input.value !== '' && !contains(input.value.at(-1),arr)) input.value += '*'
        if(control.classList.contains('division') && input.value !== '' && !contains(input.value.at(-1),arr)) input.value += '/'
        if(control.classList.contains('substraction') && input.value !== '' && !contains(input.value.at(-1),arr)) input.value += '-'
        if(control.classList.contains('decimal') && input.value !== '' && !contains(input.value.at(-1),arr)) input.value += '.'
        if(control.classList.contains('modulo') && input.value !== '' && !contains(input.value.at(-1),arr)) input.value += '%'
        if(control.classList.contains('equal') && input.value !== '' && !contains(input.value.at(-1),arr)) input.value = func(input.value)
        if(control.classList.contains('delete-one') && input.value.at(-1)) input.value = input.value.slice(0,-1)
        if(control.classList.contains('round-of') && input.value !== '') input.value = Math.round(func(input.value))
        if(control.classList.contains('math-log') && input.value !== '') input.value = Math.log(func(input.value))
        if(control.classList.contains('square-root') && input.value !== '') input.value = Math.sqrt(func(input.value))
        if(control.classList.contains('power') && input.value !== '') input.value = Math.pow(func(input.value),2)
        if(control.classList.contains('one-square') && input.value !== '') input.value = 1/(func(input.value))
        if(control.classList.contains('clear-all')) input.value = ''
        if(input.value === 'NaN') input.value = ''

    })
})

function contains(target, pattern){
    let value = 0;
    pattern.forEach(function(word){
      value = value + target.includes(word);
    });
    return (value === 1)
}

const func = (string) => {
    return (new Function('return (' + string + ')')())
}