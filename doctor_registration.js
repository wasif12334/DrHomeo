const doctorRegistrationForm = document.getElementById('doctorRegistrationForm');

doctorRegistrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const specialization = document.getElementById('specialization').value;
    const experience = document.getElementById('experience').value;
    const qualification = document.getElementById('qualification').value;
    const clinicAddress = document.getElementById('clinic_address').value;

    // Create an array to store the input values
    const userData = {
        name: name,
        email: email,
        password: password,
        specialization: specialization,
        experience: experience,
        qualification: qualification,
        clinicAddress: clinicAddress
    };

    // Send data to server-side script
    fetch('/register-doctor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.ok) {
            // Handle successful registration
            console.log('Doctor registration successful');
            // Redirect to a success page or display a success message
        } else {
            // Handle registration errors
            console.error('Error registering doctor');
            // Display an error message to the user
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Display a generic error message to the user
    });
});