//mobile menu - burger
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});

//--------------IMAGE SLIDER-------------------------

const thumbnails = document.getElementsByClassName("thumbnail");
const slider = document.getElementById("slider");
const next = document.getElementById("slideRight");
const prev = document.getElementById("slideLeft");

next.addEventListener("click", ()=>{
    scrollAmount = 0;
    let slideTimer = setInterval(()=>{
        slider.scrollLeft += 10;
        scrollAmount += 10;
        if (scrollAmount >= 100){
            window.clearInterval(slideTimer)
        }
    }, 25);
})

prev.addEventListener("click", ()=>{
    scrollAmount = 0;
    let slideTimer = setInterval(()=>{
        slider.scrollLeft -= 10;
        scrollAmount += 10;
        if (scrollAmount >= 100){
            window.clearInterval(slideTimer)
        }
    }, 25);
});
// Auto Play Function
function autoPlay() {
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
      slider.scrollLeft = 0;
    } else {
      slider.scrollLeft += 1;
    }
  }
  
  let play = setInterval(autoPlay, 10);
  
  // Pause the slide on hover
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("mouseover", () => {
      clearInterval(play);
    });
    thumbnails[i].addEventListener("mouseout", () => {
      return (play = setInterval(autoPlay, 10));
    });
  }

  //--------------------------------------------