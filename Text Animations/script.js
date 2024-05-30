const h1 = document.querySelector('#container h1')
const h1Text = h1.textContent
const splitText = h1Text.split('')

let finalText = ''

splitText.forEach((e, i) => {
    if (i < ((splitText.length) / 2)) {
        finalText += `<span class='a'>${e}</span>`
    } else {
        finalText += `<span class='b'>${e}</span>`
    }
})

h1.innerHTML = finalText

gsap.from('h1 .a', {
    y: 80,
    duration: 0.5,
    delay: 0.3,
    opacity: 0,
    stagger: 0.15
})

gsap.from('h1 .b', {
    y: 80,
    duration: 0.5,
    delay: 0.3,
    opacity: 0,
    stagger: -0.15
})

