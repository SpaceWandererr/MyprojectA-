const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

<<<<<<< HEAD
//for our service sliding
=======
>>>>>>> 5e517dc4dd92996f8321d3d4f36c4c7bd22e31e4
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
<<<<<<< HEAD
    dots[i].className = dots[i].className.replace("active", "");
=======
    dots[i].className = dots[i].className.replace(" active", "");
>>>>>>> 5e517dc4dd92996f8321d3d4f36c4c7bd22e31e4
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}