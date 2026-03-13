// script.js

// Open lightbox when image is clicked
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = src;
    lightbox.style.display = 'flex';
}

// Close lightbox when user clicks anywhere on it
document.getElementById('lightbox').onclick = function() {
    this.style.display = 'none';
}

const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;

    if(answer.style.maxHeight){
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
document.getElementById("whatsappForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let service = document.getElementById("service").value;

  let message = `Hello Kortek Technologies,%0A%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Service Needed: ${service}`;

  let whatsappURL = "https://wa.me/27615845083?text=" + message;

  window.open(whatsappURL, "_blank");
});
