gsap.from('#box1', {
    scale: 0,
    duration: 2,
    delay: 1
})

gsap.from('#box2', {
    scale: 0,
    duration: 2,
    delay: 1,
    scrollTrigger: '#box2'
})

gsap.from('#box3', {
    scale: 0,
    duration: 2,
    delay: 1,
    scrollTrigger: {
        trigger: '#box3',
        scroller: 'body',
        markers: true
    }
})