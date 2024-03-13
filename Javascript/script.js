
function menu() {
  var x = document.getElementById("secondnav");

  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
}



// THis dropdown code


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
// this is home image transiistion code 

let sliderposition=0;
const sliders=document.querySelectorAll('.backgroudimage');
const totalsliders=sliders.length;
console.log(totalsliders);

function updateposition(){
    sliders.forEach( slide => {
      slide.classList.remove('rotate');
      slide.classList.add('hidden');
    });
    sliders[sliderposition].classList.add('rotate');
}

setInterval(()=>{
    if(sliderposition==totalsliders-1){
        sliderposition=0;
    }else{
        sliderposition++;
    }
    updateposition();
} ,5000);


// This is click the button its will move another content code
function slide(val){
let carousel= document.getElementById('com');
console.log(carousel.scrollLeft);
if(carousel.scrollLeft !== 2020) {
	let scrolall = (val === 'prev') ? carousel.scrollLeft -= 990 : carousel.scrollLeft += 990;	
}
else{
carousel.scrollLeft = 0;
}
}

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}