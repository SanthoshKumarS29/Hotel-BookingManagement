const form = document.getElementById("bookingForm"); // Ensure you have the correct ID here
const checkInInput = document.getElementById("check-in");
const checkOutInput = document.getElementById("check-out");
 
// SET DATE LIMITS ON PAGE LOAD
const today = new Date().toISOString().split('T')[0];
checkInInput.min = today;
checkOutInput.min = today;

// FORM SUBMIT LOGIC
form.addEventListener("submit", function(e){
    e.preventDefault(e); // Removed the (0)

    const checkIn = checkInInput.value;
    const checkOut = checkOutInput.value;
    const guests = document.getElementById("guests").value;
    const rooms = document.getElementById("rooms").value;

    console.log('Form submitted successfully', checkIn, checkOut, guests, rooms);

    showToast("We will contact you soon!");

    form.reset();
    
    // Reset the min dates after form reset (as reset() clears attributes in some browsers)
    checkInInput.min = today;
    checkOutInput.min = today;
});
