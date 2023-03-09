let slideIndex = 1;
let slideIndex2 = 1;
let slideIndex3 = 1;

showSlides(slideIndex);
showSlides2(slideIndex2);
showSlides3(slideIndex3);

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
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


// Second showSlides


function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
  let j;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("demo2");
  let captionText2 = document.getElementById("caption2");
  if (n > slides2.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides2.length}
  for (j = 0; j < slides2.length; j++) {
    slides2[j].style.display = "none";
  }
  for (j = 0; j < dots2.length; j++) {
    dots2[j].className = dots2[j].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";
  dots2[slideIndex2-1].className += " active";
  captionText2.innerHTML = dots2[slideIndex2-1].alt;
}


// Third showSlides


function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// Thumbnail image controls
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}

function showSlides3(n) {
  let k;
  let slides3 = document.getElementsByClassName("mySlides3");
  let dots3 = document.getElementsByClassName("demo3");
  let captionText3 = document.getElementById("caption3");
  if (n > slides3.length) {slideIndex3 = 1}
  if (n < 1) {slideIndex3 = slides3.length}
  for (k = 0; k < slides3.length; k++) {
    slides3[k].style.display = "none";
  }
  for (k = 0; k < dots3.length; k++) {
    dots3[k].className = dots3[k].className.replace(" active", "");
  }
  slides3[slideIndex3-1].style.display = "block";
  dots3[slideIndex3-1].className += " active";
  captionText3.innerHTML = dots3[slideIndex3-1].alt;
}