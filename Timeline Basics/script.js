const tl = gsap.timeline()

tl.from('.logo', {
    opacity: 0,
    y:-30,
    delay:1,
    duration:1
})

tl.from('.navItems p', {
    opacity: 0,
    y:-30,
    duration:1,
    stagger:0.3 // To add delay to individual child. 
})