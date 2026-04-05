const sidebar = document.querySelector('.hc-sidebar');
const menuBtn = document.querySelector('.menu-icon');
const menuClose = document.querySelector('.cross-icon');

const dropdown = document.querySelector('.mble-dropdown');
const dropdownBtn = document.querySelector('.mble-dd-btn');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

menuClose.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

dropdownBtn.addEventListener('click', () => {
  dropdown.classList.toggle('expand');
});

// News letter
const footerForm = document.getElementById("footer-nl");

footerForm.addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("email").value;
  console.log('News Letter Submitted', email)

  showToast('Our Daily Updates are daily reached You')

  footerForm.reset();
})

function showToast(message){
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show")

  setTimeout(() => {
    toast.classList.remove("show")
  }, 3000)
}
