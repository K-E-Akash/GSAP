let tl = gsap.timeline()

tl.to('#nav', {
    x: '100%',
    duration: 0.7
})

tl.from('#nav h3', {
    opacity: 0,
    stagger: 0.28,
    x: '-150'
})

tl.from('#nav i', {
    opacity: 0
})

tl.pause() // Pauses the above timeline till played.

const menuBtn = document.querySelector('#menu i')
const crossBtn = document.querySelector('#nav i')

menuBtn.addEventListener('click', function(){
    tl.play() // To play the timeline.
})

crossBtn.addEventListener('click', function(){
    tl.reverse() // To reverse the timeline to initial condition
})