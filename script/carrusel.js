// Animación de entrada
gsap.from(".hero h1", {
  opacity: 0,
  y: -50,
  duration: 1,
  delay: 0.2
});

gsap.from(".hero p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.6
});

gsap.from(".btn-primary", {
  opacity: 0,
  scale: 0.8,
  duration: 0.8,
  delay: 1,
  ease: "back.out(1.7)"
});

// Scroll animations
gsap.utils.toArray(".section").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
});

// Tarjetas del portafolio
gsap.utils.toArray(".card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 40,
    delay: i * 0.1,
    duration: 0.8
  });
});

