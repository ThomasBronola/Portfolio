function nextSlide() {
    document.getElementById('next').click()
}

var intervalId = window.setInterval(function(){
    nextSlide();
  }, 3000);


// JAVA 
$("#Dental").on('hidden.bs.modal', function (e) {
    document.getElementById("DentalVideo").src = "https://www.youtube.com/embed/roZl607jP4k";
});


// WEB DEV

$("#Construct-it").on('hidden.bs.modal', function (e) {
    document.getElementById("Construct-itVideo").src = "https://www.youtube.com/embed/flc8gOHmaeo"
});

$("#Brgy").on('hidden.bs.modal', function (e) {
    document.getElementById("BrgyVideo").src = "https://www.youtube.com/embed/SuSjVzCvOSw"
});


// PYTHON 
$("#SportsCenter").on('hidden.bs.modal', function (e) {
    document.getElementById("SportsCenterVideo").src = "https://www.youtube.com/embed/I4ZT-MRWoto"
});


$("#CoMPiS").on('hidden.bs.modal', function (e) {
    document.getElementById("CoMPiSVideo").src = "https://www.youtube.com/embed/RM5rJ2jXSog"
});