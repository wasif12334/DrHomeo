const appointmentForm = document.getElementById('appointmentForm');
const formMessage = document.getElementById('form-message');

appointmentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (!name || !email || !phone || !date || !time) {
    formMessage.textContent = "Please fill out all required fields.";
    return;
  }

  const formData = {
    name,
    email,
    phone,
    date,
    time,
    message,
  };

  // Send data to server-side script (using Fetch API)
  fetch('/send-appointment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.success) {
        formMessage.textContent = "Appointment request sent successfully!";
        appointmentForm.reset();
      } else {
        formMessage.textContent = data.error || "An error occurred. Please try again.";
      }
    })
    .catch(error => {
      console.error('Error:', error);
      formMessage.textContent = "An error occurred. Please try again.";
    });
});