const cursor = document.querySelector('#cursor')
const container = document.querySelector('#container')
const image = document.querySelector('#image')

container.addEventListener('mousemove', function(dets){
    gsap.to('#cursor', {
        x: dets.x,
        y: dets.y,
        duration: 1,
        ease: "back.out(2)"
    })
})

image.addEventListener('mouseenter', function(){
    cursor.innerHTML = 'View</br>More'
    gsap.to('#cursor', {
        scale: 3,
        duration: 2,
        ease: "back.out(2)",
        backgroundColor: '#ffffff8a'
    })
})

image.addEventListener('mouseleave', function(){
    cursor.innerHTML = ''
    gsap.to('#cursor', {
        scale: 1,
        duration: 2,
        ease: "back.out(2)",
        backgroundColor: 'white'
    })
})

