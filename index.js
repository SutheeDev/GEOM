const sqTl = gsap.timeline({repeat: -1});
sqTl.to('.square', {
    x: '140%',
    rotate: 90,
    duration: 2.5,
    ease: 'power1.inOut'
})
sqTl.to('.square', {
    x: '0%',
    rotate: 180,
    duration: 2.5,
    ease: 'power1.inOut'
})
sqTl.to('.square', {
    x: '140%',
    rotate: 270,
    duration: 2.5,
    ease: 'power1.inOut'
})
sqTl.to('.square', {
    x: '0%',
    rotate: 360,
    duration: 2.5,
    ease: 'power1.inOut'
})

const triTl = gsap.timeline({repeat: -1});
triTl.to('.triangle', {
    x: '-135%',
    rotate: 90,
    duration: 2.5,
    ease: 'power1.inOut'
})
triTl.to('.triangle', {
    x: '0%',
    rotate: 180,
    duration: 2.5,
    ease: 'power1.inOut'
}) 
triTl.to('.triangle', {
    x: '-135%',
    rotate: 270,
    duration: 2.5,
    ease: 'power1.inOut'
})
triTl.to('.triangle', {
    x: '0%',
    rotate: 360,
    duration: 2.5,
    ease: 'power1.inOut'
}) 

const circleTl =gsap.timeline({repeat: -1});
circleTl.to('.circle', {
    x: '70%',
    duration: 1.45,
    ease: 'power1.Out'
})
circleTl.to('.circle', {
    x: '-70%',
    duration: 2.1,
    ease: 'power1.inOut'
})
circleTl.to('.circle', {
    x: '0%',
    duration: 1.45,
    ease: 'power1.in'
})
