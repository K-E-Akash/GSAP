gsap.to('#content h1', {
    transform: 'translateX(-125%)',
    scrollTrigger: {
        trigger: '#content',
        scroller: 'body',
        start: 'top 0%',
        end: 'top -150%',
        scrub: 2,
        pin: true // If we use Pin property, we must set trigger element as parent.
    }
})