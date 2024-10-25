document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const place = document.getElementById("place").value;
    const placeCountry = document.getElementById("placeCountry").value;
    const destination = document.getElementById("destination").value;
    const destinationCountry = document.getElementById("destinationCountry").value;
    const name = document.getElementById("name").value;
    const sex = document.getElementById("sex").value;
    const age = document.getElementById("age").value;
    const passenger = document.getElementById("passenger").value;
    const boardingDate = document.getElementById("boardingDate").value;
    const boardingTime = document.getElementById("boardingTime").value;

    if (!place || !placeCountry || !destination || !destinationCountry || !name || !sex || !age || !passenger || !boardingDate || !boardingTime) {
        alert("Please fill out all fields.");
        return;
    }

    // if (age < 1) {
    //     alert("Age must be a positive number.");
    //     return;
    // }

    if (passenger < 1) {
        alert("There must be at least one passenger.");
        return;
    }

    // Submit form (you can do an AJAX request here if needed)
    alert("Form submitted successfully!");
});

function onChange() {
    const age = document.querySelector('input[name=age]');

    if (age.value < 1) {
      age.setCustomValidity('Age must be a positive number.');
    } else {
      age.setCustomValidity('');
    }

  }