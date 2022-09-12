const sqTl = gsap.timeline({repeat: -1});
sqTl.to('.square', {
    x: '200%',
    rotate: 90,
    duration: 2.5,
    ease: 'power2.inOut'
})
sqTl.to('.square', {
    x: '0%',
    rotate: 180,
    duration: 2.5,
    ease: 'power2.inOut'
})
sqTl.to('.square', {
    x: '200%',
    rotate: 270,
    duration: 2.5,
    ease: 'power2.inOut'
})
sqTl.to('.square', {
    x: '0%',
    rotate: 360,
    duration: 2.5,
    ease: 'power2.inOut'
})

const triTl = gsap.timeline({repeat: -1});
triTl.to('.triangle', {
    x: '-200%',
    rotate: 90,
    duration: 2.5,
    ease: 'power2.inOut'
})
triTl.to('.triangle', {
    x: '0%',
    rotate: 180,
    duration: 2.5,
    ease: 'power2.inOut'
}) 
triTl.to('.triangle', {
    x: '-200%',
    rotate: 270,
    duration: 2.5,
    ease: 'power2.inOut'
})
triTl.to('.triangle', {
    x: '0%',
    rotate: 360,
    duration: 2.5,
    ease: 'power2.inOut'
}) 