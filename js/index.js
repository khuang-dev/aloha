document.addEventListener("DOMContentLoaded", function() { 
//Flickity
const elem = document.querySelector('.main-carousel');
const flkty = new Flickity( elem, {
  cellAlign: 'left',
  wrapAround: true,
  freeScroll: true,
  autoPlay: true
});
//Fixed Header

});
//Add to cart


const emailForm = document.getElementById("emailform");
const emailInput = document.getElementById("youremail");

emailForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if ( emailInput.value == ""){
        alert("Please submit a valid email address")
    } else {
        alert("Thanks for subscribing!")
    }
});

