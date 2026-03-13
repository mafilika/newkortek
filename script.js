// Wait until page loads
document.addEventListener("DOMContentLoaded", function(){

// Lightbox
function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');

    if(lightbox && img){
        img.src = src;
        lightbox.style.display = 'flex';
    }
}

// Close lightbox
const lightbox = document.getElementById('lightbox');
if(lightbox){
    lightbox.onclick = function(){
        this.style.display = "none";
    }
}

// FAQ Accordion
const questions = document.querySelectorAll(".faq-question");

questions.forEach(question => {
    question.addEventListener("click", () => {

        const answer = question.nextElementSibling;

        if(answer.style.maxHeight){
            answer.style.maxHeight = null;
        }else{
            answer.style.maxHeight = answer.scrollHeight + "px";
        }

    });
});


// WhatsApp Form
const form = document.getElementById("whatsappForm");

if(form){

form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let service = document.getElementById("service").value;

    let message =
`Hello Kortek Technologies,

Name: ${name}
Phone: ${phone}
Email: ${email}
Service Needed: ${service}`;

    let whatsappURL = "https://wa.me/27615845083?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
});

}

});
