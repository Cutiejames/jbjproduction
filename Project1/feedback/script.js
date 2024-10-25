// 

let submit = document.getElementById('submit');
let feedbackForm = document.getElementById('feedbackForm');

submit.addEventListener('click', function(event) {
    
    let firstName = document.getElementById('fname').value.trim();
    let lastName = document.getElementById('lname').value.trim();
    let email = document.getElementById('email').value.trim();
    let subject = document.getElementById('subject').value.trim();

    if (!firstName || !lastName || !email || !subject) {
        alert("Please fill out all fields before submitting.");
        event.preventDefault();
        return;
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
        return;
    }

    alert("Thank you for your cooperation with our website :) ");

    setTimeout(function() {
        window.location.href = '/Project1/Project1.html';
    }, 1);
});

