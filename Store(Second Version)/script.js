window.addEventListener("load", () => {
    gsap.registerPlugin(ScrollTrigger);

    const video = document.getElementById("bg-video");
    const videoDuration = 4;

    gsap.to(video, {
        currentTime: videoDuration,
        ease: "none",
        scrollTrigger: {
            trigger: ".scroll-spacer",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    });

});


window.onscroll = function() {
  const myDiv = document.getElementById("myDiv");
  // Если прокрутили больше 500px
  if (window.pageYOffset >= 3500) {
    myDiv.classList.remove("fixed");
    myDiv.classList.add("static");
  } else {
    myDiv.classList.remove("static");
    myDiv.classList.add("fixed");
  }
};
