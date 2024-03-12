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
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


//tinhtong
  function them(button) {
    var row = button.parentElement.parentElement.cloneNode(true);
    var btnXoa = row.getElementsByTagName("button")[0];
    btnXoa.innerText = "Xóa";
    btnXoa.setAttribute('onclick', 'xoa(this)');
    document.getElementById("cart").appendChild(row);

  tinhtong();
}

function xoa(button) {
  var row = button.parentElement.parentElement;
  document.getElementById("cart").removeChild(row);

  tinhtong();
}
function tinhtong() {
  var cart = document.getElementById("cart");
  var rows = cart.getElementsByTagName("tr");
  var tong = 0;
  for (let i = 0; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName("td");
      var price = cells[0].innerText.substring(1);
      tong += Number(price);

  }
  document.getElementById("tong").innerText = tong;
}