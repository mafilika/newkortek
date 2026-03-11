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
