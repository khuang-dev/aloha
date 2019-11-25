document.addEventListener("DOMContentLoaded", function () {
    //Flickity
    const elem = document.querySelector('.main-carousel');
    const flkty = new Flickity(elem, {
        cellAlign: 'left',
        wrapAround: true,
        freeScroll: true,
        autoPlay: true
    });

    //Add to cart
    const shoppingCartButton = document.getElementById("shopping-cart-button");
    const addToCart = document.querySelectorAll(".addtocart");
    let counter = 0;

    shoppingCartButton.style.display = "none";
    for (i = 0; i < addToCart.length; i++) {
        addToCart[i].addEventListener("click", function () {
            counter++;
            shoppingCartButton.innerText = counter;
            if (counter > 0) {
                shoppingCartButton.style.display = "block";
            }
        })
    };

    //Email
    const emailForm = document.getElementById("emailform");
    const emailInput = document.getElementById("youremail");

    emailForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (emailInput.value === "") {
            alert("Please submit a valid email address")
        } else {
            alert("Thanks for subscribing!")
        }
    });

});