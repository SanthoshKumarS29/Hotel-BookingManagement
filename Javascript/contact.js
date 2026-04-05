const form = document.getElementById("contactForm");
 
// FORM SUBMIT LOGIC
form.addEventListener("submit", function(e){
    e.preventDefault(e); // Removed the (0)

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log('Form submitted successfully', name, email, message);

    showToast("We will contact you soon!");

    form.reset();
});
