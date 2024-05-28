gsap.from('#page1 h2', {
    opacity: 0,
    x: 500,
    duration: 2,
    scrollTrigger: {
        trigger: '#page1 h2',
        scroller: 'body',
        start: 'top 60%'
    }
})

gsap.from('#page1 h1', {
    opacity: 0,
    x: -500,
    duration: 2,
    scrollTrigger: {
        trigger: '#page1 h1',
        scroller: 'body',
        start: 'top 60%'
    }
})

gsap.from('#box1', {
    opacity: 0,
    scale: 0,
    rotate: 720,
    scrollTrigger: {
        trigger: '#box1',
        scroller: 'body',
        markers: true,
        start: 'top 60%',
        end: 'top 40%',
        scrub: 3 // For the animation to be mapped between the start-end ponits, Set value as true or (1-5)
    }
})