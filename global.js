document.addEventListener("DOMContentLoaded", function() {
   
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            this.classList.add("active");
        });
    });

    
    const paymentForm = document.querySelector(".payment-form form");
    if (paymentForm) {
        paymentForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const paymentSuccessful = Math.random() < 0.5; 
            if (paymentSuccessful) {
                window.location.href = "paymentAccept.html";
            } else {
                window.location.href = "paymentDeclined.html";
            }
        });
    }


    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        card.addEventListener("click", function() {
            const selectedService = this.dataset.service;
            localStorage.setItem("selectedService", selectedService);
            window.location.href = "payment.html";
        });
    });


    const paymentFormSubmit = document.getElementById("paymentForm");
    if (paymentFormSubmit) {
        paymentFormSubmit.addEventListener("submit", function(event) {
            event.preventDefault();
            if (validateForm()) {
                alert("Payment successful!");
                window.location.href = "paymentAccept.html";
            }else{
                window.location.href = "paymentDeclined.html";
            }
        });
    }

  
    setTimeout(function() {
        document.getElementById("textA").classList.add("appear");
    }, 1000);
    setTimeout(function() {
        document.getElementById("textB").classList.add("appear");
    }, 2000);
    setTimeout(function() {
        document.getElementById("textC").classList.add("appear");
    }, 3000);

    const greeting = "Hello, I'm Maxwell Kariuki, a Web Developer.";
    const greetingContainer = document.getElementById("greeting");
    let i = 0;
    setInterval(function() {
        greetingContainer.textContent += greeting[i];
        i++;
        if (i === greeting.length) clearInterval();
    }, 100);
});


function validateForm() {
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvv = document.getElementById("cvv").value;
    const nameOnCard = document.getElementById("nameOnCard").value;

    resetErrorMessages();

    let isValid = true;

    if (!isValidCardNumber(cardNumber)) {
        displayErrorMessage("cardNumberError", "Invalid card number");
        isValid = false;
    }
    if (!isValidExpiryDate(expiryDate)) {
        displayErrorMessage("expiryDateError", "Invalid expiry date");
        isValid = false;
    }
    if (!isValidCVV(cvv)) {
        displayErrorMessage("cvvError", "Invalid CVV");
        isValid = false;
    }
    if (nameOnCard.trim() === "") {
        displayErrorMessage("nameOnCardError", "Name on card is required");
        isValid = false;
    }

    return isValid;
}


function isValidCardNumber(cardNumber) {
    const strippedCardNumber = cardNumber.replace(/\D/g, '');
    if (strippedCardNumber.length < 13 || strippedCardNumber.length > 19) {
        return false;
    }
    let sum = 0;
    let alternate = false;
    for (let i = strippedCardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(strippedCardNumber.charAt(i));
        if (alternate) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        alternate = !alternate;
    }
    return (sum % 10 === 0);
}


function isValidExpiryDate(expiryDate) {
    const regex = /^(0[1-9]|1[0-2])\/([2-9][0-9])$/;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    const matches = expiryDate.match(regex);
    if (!matches) {
        return false;
    }
    const month = parseInt(matches[1]);
    const year = parseInt(matches[2]);
    return (year > currentYear || (year === currentYear && month >= currentMonth));
}

function isValidCVV(cvv) {
    const regex = /^[0-9]{3,4}$/;
    return regex.test(cvv);
}

function displayErrorMessage(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function resetErrorMessages() {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function(element) {
        element.textContent = "";
    });
}

const currentPage = window.location.pathname;

const navLinks = document.querySelectorAll('nav ul li a');


navLinks.forEach(link => {
    
    if (link.getAttribute('href') === currentPage) {
        
        link.classList.add('active');
    }
});

