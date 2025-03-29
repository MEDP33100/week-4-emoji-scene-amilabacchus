document.addEventListener("DOMContentLoaded", () => {

    const stars = document.querySelectorAll(".star");
    //scatters the stars randomly 
    stars.forEach(star => {
        const randomTop = Math.random() * 100;
        const randomLeft = Math.random() * 100;
        star.style.top = `${randomTop}%`;
        star.style.left = `${randomLeft}%`;
    });

    gsap.to(".star", {
        opacity: 0.3,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        stagger: 0.2
    });

    gsap.to(".satellite", {
        x: "+=200vw", //moves across screen 
        duration: 15,
        repeat: -1,
        ease: "linear"
    });
});