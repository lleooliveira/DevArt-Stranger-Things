// ANIMAÇÕES -> ANIMAÇÕES COM ROLAGEM

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
    smoth: 5,
    effects: true
})

gsap.from(".hero", {
    opacity: 0,
    duration: 2
})


gsap.from("picture:nth-child(2)", {
    y: 200,
    duration: 3,
    opacity: 0,
})