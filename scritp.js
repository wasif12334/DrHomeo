const appointmentForm = document.getElementById('appointmentForm');
const formMessage = document.getElementById('form-message');

appointmentForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const message = document.getElementById('message').value;

  // Basic validation (can be extended further)
  if (!name || !email || !phone || !date || !time) {
    formMessage.textContent = 'Please fill out all required fields.';
    return;
  }

  // Prepare data for server-side processing (e.g., JSON)
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
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        formMessage.textContent = 'Appointment request sent successfully!';
        // Clear form after successful submission
        appointmentForm.reset();
      } else {
        formMessage.textContent = data.error || 'An error occurred. Please try again.';
      }
    })
    .catch(error => {
      console.error(error);
      formMessage.textContent = 'An error occurred. Please try again.';
    });
});