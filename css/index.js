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

const emailForm=document.getElementById("emailform");
const emailInput=document.getElementById("youremail").value;
const emailValue = emailInput.value;
console.log(emailValue);
emailForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (emailValue == ""){
        event.preventDefault();
        alert("Please submit a valid email address")
    } else {
        event.preventDefault();
        alert("Thanks for subscribing!")
    }
})





 }); //end of script