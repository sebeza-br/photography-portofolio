const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  responseMessage.textContent = 'Thank you for your message! I will get back to you soon.';
  form.reset();
});