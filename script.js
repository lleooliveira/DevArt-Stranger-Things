// ANIMAÇÕES -> ANIMAÇÕES COM ROLAGEM

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
    smoth: 6,
    effects: true
})




// ANIMAÇÃO HERO

gsap.from(".hero", {
    opacity: 0,
    duration: 2
})


gsap.from("picture:nth-child(2)", {
    y: 60,
    duration: 3,
    opacity: 0,
})

gsap.from("picture:nth-child(1)", {
    y: -60,
    duration: 3,
    opacity: 0,
})

// ANIMAÇÃO CARDS

    gsap.from(".card", {
    opacity: 0,
    y: 30,
    filter: "blur(10px)",
    stagger: .4,
    scrollTrigger: {
        trigger: ".card",
        markers: false,
        start: "0% 80%",
        end: "100% 70%",
        scrub: 2
    }
});

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        gsap.killTweensOf(card); // 🔥 limpa animações pendentes

        gsap.to(card, {
        y: -10,
        boxShadow: "0 8px 18px rgba(0, 0, 0, 0.18)",
        duration: 0.8, // menor = mais responsivo
        ease: "power2.out",
        overwrite: "auto"
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.killTweensOf(card); // 🔥 limpa de novo

        gsap.to(card, {
        y: 0,
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)", // melhor manter sombra base
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto"
        });
    });
});

// ANIMAÇÃO SEÇÃO OBRIGADO

gsap.from(".secaoObrigado h2", {
    opacity: 0,
    y: 30,
    stagger: .1,
    scrollTrigger: {
        trigger: ".secaoObrigado h2",
        markers: false,
        start: "0% 80%",
        end: "100% 40%",
        scrub: 2
    }
})

gsap.from(".secaoObrigado ul li", {
    opacity: 0,
    x: 40,
    filter: "blur(10px)",
    stagger: .1,
    scrollTrigger: {
        trigger: ".secaoObrigado ul",
        markers: false,
        start: "0% 70%",
        end: "100% 50%",
        scrub: 2
    }   

})


// ANIMAÇOES FOOTER

gsap.from("footer", {
    y: "-30%",
    inmediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        markers: false,
        scrub: 2,
        invalidateOnRefresh: true,
        end: "100% 100%"
    }
})

// LETRAS ANIMADAS

SplitText.create(".split", {
    
})