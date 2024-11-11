document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('button');
  const form = document.getElementById('form');
  const popupMessage = document.getElementById('popupMessage');
    const popupText = document.getElementById('popupText');

  if (btn && form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
      
      btn.querySelector('.text').textContent = "Sending..."; 

      sendmail(); // Call your email sending function
    });
  } else {
    console.error('Form or Button not found');
  }
  
  function sendmail() {
    // Function to send email via EmailJS
    let fullName = document.getElementById("fullName").value.trim();
    let emailId = document.getElementById("email_id").value.trim();
    let phone_num = document.getElementById("phone_num").value.trim();
    let city_name = document.getElementById("city_name").value.trim();
    let message = document.getElementById("message").value.trim();

    let params = {
      name: fullName,
      email: emailId,
      phone: phone_num,
      city: city_name,
      message: message
    };

    emailjs.send("service_dcsuv1i", "template_ser2m1d", params)
      .then(function(response) {
        console.log("Email sent successfully:", response);
        form.reset(); // Reset the form fields to their default values
          
          // Reset button text to "Submit"
          btn.querySelector('.text').textContent = "Submit";

          popupText.textContent = "Email Sent Successfully!";
          showPopup();
      })
      .catch(function(error) {
        console.error("Error sending email:", error);
        form.reset(); // Reset the form fields to their default values
          
          // Reset button text to "Submit"
          btn.querySelector('.text').textContent = "Submit";

          // Show error message in modal
          popupText.textContent = "There was an error sending your email.";
          showPopup();
      });
  }
  function showPopup() {
    // Show the popup
    popupMessage.style.display = "block";
    
    // Hide the popup after 3 seconds
    setTimeout(function() {
      popupMessage.style.display = "none";
    }, 3000); // 3000ms = 3 seconds
  }
});
