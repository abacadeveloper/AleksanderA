//select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

//scroll reveal

window.sr = scrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300


});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600


});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600


});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600


});

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;


// Two images side by side
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.msFlex = "50%";  // IE10
    elements[i].style.flex = "50%";
  }
}

// Add active class to the current button (highlight it)
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += "active";
  });
}

//Define language reload anchors
