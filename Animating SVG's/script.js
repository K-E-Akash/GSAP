const pathOrg = `M 100 100 Q 750 100 1400 100`
const pathVal = `M 100 100 Q 750 100 1400 100`

let string = document.querySelector("#container")

string.addEventListener('mousemove', function (dets) {
    let pathVal = `M 100 100 Q ${dets.offsetX} ${dets.offsetY} 1400 100`

    console.log(dets.offsetY)

    gsap.to('svg path', {
        attr: { d: pathVal },
        duration: 0.3,
        ease: 'power4.out'
    })
})

string.addEventListener('mouseleave', function (dets) {
    gsap.to('svg path', {
        attr: { d: pathOrg },
        duration: 1.5,
        ease: "elastic.out(1,0.2)",
    })
})