//--GSAP ANIMATION --//
gsap.from('.navbar', { duration: 2, y: '-100%', ease: 'bounce' });
//----------------STICKY NAVBAR + falling animation------------------//
window.addEventListener("scroll", function () {
  const navBar = document.querySelector(".navbar");
  
  if (window.pageYOffset > 0) {
  navBar.classList.add("is-sticky");
  } else {
  navBar.classList.remove("is-sticky");
  }
});
  
//------SCROLLTRIGGER for each section----//
gsap.registerPlugin(ScrollTrigger);

gsap.from(".section1", {
  duration: 1,
  x: "-1500",
  ease: "linear",
    scrollTrigger: {
      trigger:".section1"
    }
});
gsap.from(".section2", {
  duration: 1,
  x: "1500",
  ease: "linear",
    scrollTrigger: {
      trigger:".section2"
    }
});

gsap.from(".section3", {
  duration: 1,
  x: "-1500",
  ease: "linear",
    scrollTrigger: {
      trigger:".section3"
    }
});
gsap.from(".section4", {
  duration: 1,
  x: "1500",
  ease: "linear",
    scrollTrigger: {
      trigger:".section4"
    }
}); 
  gsap.from(".section5", {
  duration: 1,
  x: "-1500",
  ease: "fade",
    scrollTrigger: {
      trigger:".section5"
    }
});
//Column animation - upward trigger//
gsap.from(".ph", {
  duration: 1,
  y: "250",
  ease: "linear",
    scrollTrigger: {
      trigger:".ph"
    }
});
gsap.from(".mh", {
  duration: 1,
  y: "250",
  delay: 0.5,
  ease: "linear",
    scrollTrigger: {
      trigger:".mh"
    }
});
gsap.from(".wp", {
  duration: 1,
  y: "250",
  delay: 1,
  ease: "linear",
    scrollTrigger: {
      trigger:".wp"
    }
});

gsap.from(".ec", {
  duration: 1,
  y: "250",
  delay: 1.5,
  ease: "linear",
    scrollTrigger: {
      trigger:".ec"
    }
}); 
//-----------------HAMBURGER----------------//
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});
//-----------------SCROLLING-GALLERY-------------------//

const slider = document.getElementById("slider");
const nextBtn = document.getElementById("slide-right");
const prevBtn = document.getElementById("slide-left");

nextBtn.addEventListener("click", () => {
  scrollAmount = 0;
  let slideTimer = setInterval(() => {
    slider.scrollLeft += 10;
    scrollAmount += 10;
    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 25);
});

prevBtn.addEventListener("click", () => {
  scrollAmount = 0;
  let slideTimer = setInterval(() => {
    slider.scrollLeft -= 10;
    scrollAmount += 10;
    if (scrollAmount >= 100) {
      window.clearInterval(slideTimer);
    }
  }, 25);
});
function autoPlay() {
  if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft += 1;
  }
}
let Play = setInterval(autoPlay, 30);


//---------------------TIMELINE CARD-------------------------//
(function () {
  const items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    let box = el.getBoundingClientRect();
    return (
      box.top >= 0 &&
      box.left >= 0 &&
      box.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      box.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function slideIn() {
    for (let i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("slide-in");
      } else {
        items[i].classList.remove("slide-in");
      }
    }
  }

  window.addEventListener("load", slideIn);
  window.addEventListener("scroll", slideIn);
  window.addEventListener("resize", slideIn);
})();
//-----------------------BACK TO TOP Button---------------------------//
const toTop = document.getElementById("bttop");
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
  }

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}