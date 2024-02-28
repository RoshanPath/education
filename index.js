// FOR STICKY HEADER STARTS
const header = document.querySelector("#header");

const sticky = 50;

console.log(sticky);

window.addEventListener('scroll', () => {
  console.clear();
    console.log(window.pageYOffset);

    if(window.pageYOffset > sticky) {
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }  

});

// FOR STICKY HEADER STARTS ENDS
// TOGGLE MENU STARTS
function myfun() {
  var element = document.getElementById("dropdown-menu");

  element.classList.toggle("show");
}

// TOGGLE MENU ENDS


// FOR TEXT SLIDER STARTS 

$(document).ready(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
    });
  }); 

  // FOR TEXT SLIDER STARTS 
//   FOR COPYRIGHT YEAR
  myDate = new Date();
        
  document.querySelector('.date').innerHTML = myDate.getFullYear();

//   FOR COPYRIGHT YEAR
