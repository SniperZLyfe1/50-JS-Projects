const ripple_btn = document.querySelector('button')

ripple_btn.addEventListener('click', (e) => {
    const posX = e.offsetX
    const posY = e.offsetY
    const ripple_effect = document.createElement('span')
    ripple_effect.className = 'ripple-effect'
    ripple_effect.style.top = `${posY}px`
    ripple_effect.style.left = `${posX}px`
    ripple_btn.appendChild(ripple_effect)
    setTimeout(() => ripple_effect.remove(), 400);
})