document.addEventListener("DOMContentLoaded", function() { 
// all of the codes go inside here

const elem = document.querySelector('.main-carousel');
const flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  wrapAround: true,
  freeScroll: true,
  autoPlay: true
});

const emailForm = document.getElementById("emailform");

const emailInput = document.getElementById("youremail");
// const emailValue = emailInput.value;
console.log(emailInput);
// console.log(emailValue,emailInput.value);

emailForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if ( emailInput.value == ""){
        alert("Please submit a valid email address") //true
    } else {
        alert("Thanks for subscribing!") //false
    }
});





 }); //end of script